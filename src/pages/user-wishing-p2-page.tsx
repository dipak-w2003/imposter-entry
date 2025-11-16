const UserWishingP2Page = () => {
  return (
    <main className="h-dvh relative">
      <header className="age-number absolute top-1/10 w-full  sm:top-1/2">
        <img
          src={
            "https://cdn.jsdelivr.net/gh/dipak-w2003/unisha-verse@main/projects/imposter-entry/gifs/number-23-gif-4.gif"
          }
          alt="number-age-23"
          className="h-50 sm:28 mx-auto"
        />
      </header>

      <div className=" absolute top-2/10 sm:left-0 flex  justify-center gap-12 w-full happy-birthday-text-then-sparkling">
        <img
          src="https://cdn.jsdelivr.net/gh/dipak-w2003/unisha-verse@main/projects/imposter-entry/gifs/happy-birthday-text-gif-1.gif"
          alt=""
          className="hbd-text-gifs h-90 sm:h-56 "
        />
        <img
          src="https://cdn.jsdelivr.net/gh/dipak-w2003/unisha-verse@main/projects/imposter-entry/gifs/sparkling-diamonds-gif-2.gif"
          alt=""
          className="hbd-text-gifs h-28 sm:24"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/dipak-w2003/unisha-verse@main/projects/imposter-entry/gifs/sliced-cake-gif-3.gif"
          alt=""
          className="absolute right-10 sm:right-0 top-4/10 sm:top-1/2 hbd-text-gifs h-88 sm:h-56"
        />
        {/*  */}
      </div>

      <div className="box-quote absolute bottom-2/10 w-full sm:bottom-0  ">
        <p className="w-[90%] relative  h-[150px] sm:h-[300px]  bg-white rounded-xl border-3 border-[#34be9a] px-5 py-5 mx-auto text-3xl sm:text-4xl text-center flex justify-center items-center ">
          <q>
            May your heart stay light, your smile bright, and your dreams near.
            Happy Birthday to someone truly special. 🎂🌸
          </q>
          <img
            src={
              "https://cdn.jsdelivr.net/gh/dipak-w2003/unisha-verse@main/projects/imposter-entry/gifs/birthday-ribbon-gif-4.gif"
            }
            alt="birthday-ribbon"
            className="h-18 absolute -left-4 -top-7 sm:top-0"
          />
          <button type="button" className="absolute top-2 right-3  font-bold">
            +
          </button>
        </p>
      </div>
    </main>
  );
};

export default UserWishingP2Page;
