export async function fetchJSON<T = any>(url: string): Promise<T> {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch: ${response.statusText}`);
    const data: T = await response.json();
    // console.log(data);

    return data;
  } catch (error) {
    // console.error("Error fetching JSON:", error);
    return null as any;
  }
}

// Generic (<T = any>) so TypeScript can infer types if needed.
// Logs errors for easier debugging.
// Returns null if fetch fails.