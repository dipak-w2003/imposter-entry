import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../lib/store/store";
import LoginToUserLoadingPage from "./login-to-user-loading-page";
import UserHomePage from "./user-home-1-page";

const UserPage = () => {
  const isLoaded = useSelector(
    (state: RootState) => state.userGeneralSlice.isLoaded
  );
  const [showFallback, setShowFallback] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowFallback(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (showFallback) {
    return <LoginToUserLoadingPage />;
  }

  return isLoaded ? <UserHomePage /> : <LoginToUserLoadingPage />;
};

export default UserPage;
