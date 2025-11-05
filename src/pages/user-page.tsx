import type { RootState } from "../lib/store/store";
import LoginToUserLoadingPage from "./login-to-user-loading-page";
import { useSelector } from "react-redux";
<<<<<<< HEAD
import UserHomePage from "./user-home-1-page";

const UserPage = () => {
  const { isLoaded } = useSelector(
=======
import UserHomePage from "./user-home-page";

const UserPage = () => {
  const { isLoaded } = useSelector(
    // optimized this code
>>>>>>> 9cd8a35 (Your message)
    (state: RootState) => state.userGeneralSlice
  );
  return isLoaded ? <UserHomePage /> : <LoginToUserLoadingPage />;
};

export default UserPage;
