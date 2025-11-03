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

  setTimeout(() => {
    if (nameState && namePredictionsCollections2.includes(nameState)) {
      dispatch(setIsLoaded(true));
      navigate("/user");
    } else {
      navigate("/login");
    }
  }, 2000);
  return <main>LoginToUserLoadingPage</main>;
};

export default LoginToUserLoadingPage;
