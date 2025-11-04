import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../lib/store/store";
import { useNavigate } from "react-router-dom";
import { setIsLoaded } from "../lib/store/user-general-slice";
import { namePredictionsCollections2 } from "../lib/constants/constants";

const LoginToUserLoadingPage = () => {
  const { name: nameState } = useSelector(
    (state: RootState) => state.userGeneralSlice
  );
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (nameState && namePredictionsCollections2.includes(nameState)) {
        dispatch(setIsLoaded(true));
        navigate("/user");
      } else {
        navigate("/login");
      }
    }, 5_000); // 10 seconds

    // cleanup timer if component unmounts
    return () => clearTimeout(timer);
  }, [nameState, navigate, dispatch]);

  return (
    <main className="flex h-screen flex-col items-center justify-center text-center">
      <h1 className="text-xl font-semibold">
        Please wait, {namePredictionsCollections2[0]}..
      </h1>
      <div className="mt-6 h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-blue-700"></div>
      <p className="mt-4 text-sm text-gray-400">
        You’ll be redirected shortly.
      </p>
    </main>
  );
};

export default LoginToUserLoadingPage;
