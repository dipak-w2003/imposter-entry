import type { RootState } from "../lib/store/store";
import LoginToUserLoadingPage from "./login-to-user-loading-page";
import { useSelector } from "react-redux";
import UserHomePage from "./user-home-1-page";

const UserPage = () => {
  const { name, isLoaded } = useSelector(
    (state: RootState) => state.userGeneralSlice
  );
  return isLoaded ? <UserHomePage /> : <LoginToUserLoadingPage />;
};

export default UserPage;
