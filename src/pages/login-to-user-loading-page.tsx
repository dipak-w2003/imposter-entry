import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";

import type { AppDispatch, RootState } from "../lib/store/store";
import { setIsLoaded } from "../lib/store/user-general-slice";
import { namePredictionsCollections2 } from "../lib/constants/constants";
import SandyLoadingAnimation from "../assets/animations/SandyLoading.json";

const LoginToUserLoadingPage = () => {
  const { name: nameState } = useSelector(
    (state: RootState) => state.userGeneralSlice
  );

  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      const isKnownUser =
        nameState && namePredictionsCollections2.includes(nameState);
      if (isKnownUser) {
        dispatch(setIsLoaded(true));
        navigate("/user");
      } else {
        navigate("/login");
      }
    }, 5_000); // 30 seconds delay

    // Cleanup timer if component unmounts
    return () => clearTimeout(timer);
  }, [nameState, navigate, dispatch]);

  return (
    <main className="flex h-screen flex-col items-center justify-center text-center bg-gray-50 dark:bg-gray-900 transition-colors">
      <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        Please wait, {namePredictionsCollections2[0]}...
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
