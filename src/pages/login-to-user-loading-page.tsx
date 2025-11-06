import Lottie from "lottie-react";

import { namePredictionsCollections2 } from "../lib/constants/constants";
import SandyLoadingAnimation from "../assets/animations/SandyLoading.json";

const LoginToUserLoadingPage = () => {
  return (
    <main className="flex h-screen flex-col items-center justify-center text-center bg-gray-50 dark:bg-gray-900 transition-colors">
      <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        Please wait , {namePredictionsCollections2[0]}
        ...
      </h1>
      <div className="h-[300px] w-[300px]">
        <Lottie animationData={SandyLoadingAnimation} loop autoplay />
      </div>
      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        You’ll be redirected shortly.
      </p>
    </main>
  );
};

export default LoginToUserLoadingPage;
