// ─────────────────────────────────────────────────────────
// MODULE-LEVEL cache — lives outside the function so it
// persists across every call for the entire app lifetime.
//
// Map<string, Promise<any>>
//   key   → the URL string,  e.g. "/lottie.json"
//   value → the Promise,     e.g. Promise<LottieData>
//
// Example snapshot after two different fetches:
//   cache = {
//     "/lottie.json"  → Promise<resolved: {...frames}>
//     "/config.json"  → Promise<resolved: {...settings}>
//   }
// ─────────────────────────────────────────────────────────
const cache = new Map<string, Promise<any>>();


// <T = any> — generic type parameter with a default.
// Lets callers get typed responses without forcing it.
//
// Example — untyped (uses default <any>):
//   const data = await fetchJSON('/lottie.json');
//   data.anything; // no type error, TS trusts you
//
// Example — typed (caller provides T):
//   const data = await fetchJSON<LottieData>('/lottie.json');
//   data.frames;   // ✅ autocomplete works
//   data.typo;     // ❌ TS compile error caught early
export async function fetchJSON<T = any>(url: string): Promise<T> {

  // ── CACHE CHECK ───────────────────────────────────────
  // Before doing any work, check if this URL was fetched before.
  //
  // 1st call → cache.has('/lottie.json') = false → skip, go fetch
  // 2nd call → cache.has('/lottie.json') = true  → return immediately
  //
  // Returning the Promise (not the value) is intentional —
  // if two calls fire simultaneously before the first resolves:
  //
  //   call A → miss → fires HTTP, stores Promise<pending>
  //   call B → hit  → gets same Promise<pending>
  //   ...both awaits resolve together from ONE request
  //
  // This prevents a race condition where both would fire
  // separate HTTP requests if you cached the resolved value.
  // ─────────────────────────────────────────────────────
  if (cache.has(url)) {
    return cache.get(url) as Promise<T>;
  }


  // ── BUILD THE PROMISE ─────────────────────────────────
  // Wrap the fetch in an IIFE (immediately invoked async fn)
  // so we get a Promise object we can store BEFORE it resolves.
  //
  // Why not just: const promise = fetch(url).then(...) ?
  // That works too — the IIFE just keeps the try/catch
  // readable and co-located with the logic below.
  // ─────────────────────────────────────────────────────
  const promise = (async () => {
    try {

      // ── HTTP REQUEST ────────────────────────────────
      // Only reaches here on a cache miss (first call per URL).
      // Every subsequent call returns the cached promise above
      // and never touches the network again.
      //
      // Example timeline with setInterval every 1 second:
      //   t=0s → MISS → real HTTP GET /lottie.json  ← only this one
      //   t=1s → HIT  → cached, no network call
      //   t=2s → HIT  → cached, no network call
      //   t=3s → HIT  → cached, no network call
      // ──────────────────────────────────────────────
      const response = await fetch(url);

      // ── STATUS CHECK ────────────────────────────────
      // fetch() does NOT throw on HTTP errors (404, 500, etc).
      // response.ok is true only for status codes 200–299.
      //
      // Example — server returns 404:
      //   response.ok         = false
      //   response.statusText = "Not Found"
      //   → throws Error("Failed to fetch: Not Found")
      //   → caught below, entry evicted from cache
      //
      // Example — server returns 200:
      //   response.ok         = true
      //   → continues to .json() parsing below
      // ──────────────────────────────────────────────
      if (!response.ok) throw new Error(`Failed to fetch: ${response.statusText}`);

      // ── PARSE + CAST ────────────────────────────────
      // .json() parses the raw response body string into a JS object.
      // "as T" tells TypeScript to treat it as the caller's type.
      //
      // Example — called as fetchJSON<LottieData>('/lottie.json'):
      //   raw body  → '{"frames":120,"speed":1}'
      //   parsed    → { frames: 120, speed: 1 }
      //   cast as T → typed as LottieData  ✅
      //
      // Note: "as T" is a compile-time assertion only —
      // TypeScript trusts you that the JSON shape matches T.
      // No runtime validation happens here.
      // ──────────────────────────────────────────────
      return (await response.json()) as T;

    } catch (error) {

      // ── EVICT ON FAILURE ────────────────────────────
      // Remove the failed Promise from cache so the next
      // call can retry a fresh HTTP request.
      //
      // Without this:
      //   fetchJSON('/lottie.json') → network error → cached forever
      //   fetchJSON('/lottie.json') → returns cached null forever ❌
      //
      // With this:
      //   fetchJSON('/lottie.json') → network error → evicted
      //   fetchJSON('/lottie.json') → MISS → retries real request ✅
      // ──────────────────────────────────────────────
      cache.delete(url);
      return null as any;
      // "as any" bypasses TS — the return type is Promise<T>
      // but we're returning null. A stricter alternative:
      //   return null as unknown as T;
    }
  })();


  // ── STORE BEFORE AWAITING ─────────────────────────────
  // Store the Promise in cache IMMEDIATELY — before it resolves.
  // This is the key to preventing the race condition.
  //
  // If we stored it after awaiting:
  //   call A → fires request → awaits... (gap here)
  //   call B → cache still empty during the gap → fires ANOTHER request ❌
  //
  // Storing it synchronously before any await:
  //   call A → fires request → stores Promise<pending> in cache
  //   call B → cache has Promise<pending>  → returns it, no new request ✅
  // ─────────────────────────────────────────────────────
  cache.set(url, promise);
  return promise;
}


// ─────────────────────────────────────────────────────────
// MANUAL CACHE INVALIDATION
// Use when you know the remote file has changed and you
// need to force a fresh fetch on the next call.
//
// Example — invalidate one URL:
//   invalidateCache('/lottie.json');
//   cache = { '/config.json' → Promise<resolved> }  ← untouched
//
// Example — invalidate everything:
//   invalidateCache();
//   cache = {}  ← fully cleared
//
// Practical use case:
//   onRefreshClick(() => {
//     invalidateCache('/lottie.json');  // bust the cache
//     fetchJSON('/lottie.json');        // fetches fresh copy
//   });
// ─────────────────────────────────────────────────────────
export function invalidateCache(url?: string) {
  // url is optional — if provided, delete just that entry
  // if omitted (undefined), clear the whole cache
  url ? cache.delete(url) : cache.clear();
}