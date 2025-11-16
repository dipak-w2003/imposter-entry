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
      <header className="mt-2 sm:mt-10 wish-heading text-4xl text-center mx-auto text-white">
        Memories & Moments
      </header>
      <div className="embla__viewport" ref={emblaRef}>
        {/* slider container */}
        <div className="embla__container realtive">
          {slides.map((slide_item) => (
            <div
              className="embla__slide min-h-[400px] flex justify-around items-center relative "
              key={slide_item.img_url}
            >
              <span className=" relative bg-[#545353fc] rounded-md text-white w-[300px] flex flex-col justify-center gap-6 items-center h-[380px] ">
                <img
                  src={slide_item.img_url}
                  className="h-[150px] w-[150px] object-center  border-none"
                  alt="topic-image"
                />
                <header className="h-[fit] text-4xl sm:text-2xl underline ">
                  {slide_item.mm_topic[currentLang] || ""}
                </header>
                <article className=" h-fit w-full text-xl sm:text-lg text-center px-3 ">
                  {slide_item.mm_des[currentLang]}
                </article>

                <button
                  type="button"
                  onClick={toggleLang}
                  className="absolute top-6 right-6 cursor-pointer "
                >
                  {currentLang && currentLang !== "nep" ? (
                    <img
                      src="https://cdn.jsdelivr.net/gh/dipak-w2003/unisha-verse@main/projects/imposter-entry/svgs/other/lang-eng-nep.svg"
                      className="h-10 animate-pulse"
                      alt=""
                    />
                  ) : (
                    <img
                      src="https://cdn.jsdelivr.net/gh/dipak-w2003/unisha-verse@main/projects/imposter-entry/svgs/other/lang-nep-eng.svg"
                      className="h-10 animate-pulse"
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
