import React from "react";
import { Link } from "react-router-dom";

const Error404Page: React.FC = () => {
  return (
    <>
      <div className="text-center min-h-screen flex flex-col justify-center items-center animate-fadeIn p-4">
        <img
          src="https://yemca-services.net/404.png"
          alt="404 Illustration"
          className="mx-auto w-80 animate-[float_3s_infinite] shadow-xl rounded-lg"
        />
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
    </>
  );
};

export default Error404Page;
