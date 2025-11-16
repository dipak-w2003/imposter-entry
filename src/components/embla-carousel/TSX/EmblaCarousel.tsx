import React, { useState } from "react";
import "../CSS/base.css";
import "../CSS/sandbox.css";
import "../CSS/embla.css";

import { type EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";

type PropType = {
  slides: {
    img_url: string;
    mm_topic: {
      eng: string;
      nep: string;
    };
    mm_des: {
      eng: string;
      nep: string;
    };
  }[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options, [Fade()]);
  const [currentLang, setLang] = useState<"nep" | "eng">("eng");
  const toggleLang = () => {
    setLang((prev) => (prev === "eng" ? "nep" : "eng"));
  };
  return (
    <div className="embla flex flex-col gap-11">
      <header className="mt-2 sm:mt-10 wish-heading text-6xl  text-center mx-auto text-white flex justify-evenly w-full ">
        <p className="text-[#b39c3f] text-[4.5rem] sm:text-[6rem]">Memories</p>
        <b>&</b>
        <p className="text-[#e2bdd3] text-[4.5rem] sm:text-[6rem]">Moments</p>
      </header>
      <div className="embla__viewport" ref={emblaRef}>
        {/* slider container */}
        <div className="embla__container realtive">
          {slides.map((slide_item) => (
            <div
              className="embla__slide min-h-[400px] flex justify-around items-center relative "
              key={slide_item.img_url}
            >
              <span className=" relative bg-[#545353fc] rounded-xl text-white w-[300px] flex flex-col justify-center gap-6 items-center h-[400px] ">
                <img
                  src={slide_item.img_url}
                  className="h-[150px] w-[150px] object-center  border-none"
                  alt="topic-image"
                />
                <header
                  className={`h-[fit] wishing-heading text-4xl font-bold sm:text-2xl underline`}
                >
                  {slide_item.mm_topic[currentLang] || ""}
                </header>
                <article
                  className={`h-fit w-full text-2xl sm:text-lg text-center px-3 `}
                >
                  {slide_item.mm_des[currentLang]}
                </article>

                {/* Lang Toggling UI/UX */}
                <button
                  type="button"
                  onClick={toggleLang}
                  className="absolute top-6 right-6 cursor-pointer "
                >
                  {currentLang && currentLang !== "nep" ? (
                    <img
                      src="https://cdn.jsdelivr.net/gh/dipak-w2003/unisha-verse@main/projects/imposter-entry/svgs/other/lang-eng-nep.svg"
                      className="h-13 sm:h-22 animate-pulse"
                      alt=""
                    />
                  ) : (
                    <img
                      src="https://cdn.jsdelivr.net/gh/dipak-w2003/unisha-verse@main/projects/imposter-entry/svgs/other/lang-nep-eng.svg"
                      className="h-13 sm:h-22 animate-pulse"
                      alt=""
                    />
                  )}
                </button>
              </span>
              <img
                src="https://cdn.jsdelivr.net/gh/dipak-w2003/unisha-verse@main/projects/imposter-entry/gifs/slider-indicator-right.gif"
                className="h-14 absolute left-2 sm:left-0 top-1/2 z-9999999 "
                alt=""
              />{" "}
              <img
                src="https://cdn.jsdelivr.net/gh/dipak-w2003/unisha-verse@main/projects/imposter-entry/gifs/slider-indicator-left.gif"
                className="h-14 absolute right-0 sm:right-0 top-1/2 z-9999999"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
