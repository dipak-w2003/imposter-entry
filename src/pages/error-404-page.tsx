import React from "react";
import { Link } from "react-router-dom";
import LottieAnimationProvider from "../components/lottie-animation-provider";
const Error404Page: React.FC = () => {
  return (
    <div className="text-center min-h-screen flex flex-col justify-center items-center animate-fadeIn p-4">
      <span className="wrapper-error-page-animation-lottie h-[300px] w-[300px]">
        <LottieAnimationProvider url="https://cdn.jsdelivr.net/gh/dipak-w2003/unisha-verse@main/projects/imposter-entry/lottie-json-animations/world-cup.json" />
      </span>
      <h1 className="text-5xl md:text-7xl font-extrabold text-blue-700 mt-6">
        Looks Like You're Lost!
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mt-2">
        We can't seem to find the page you're looking for.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transform transition hover:scale-105 hover:bg-blue-700"
      >
        Return Home
      </Link>
    </div>
  );
};

export default Error404Page;
