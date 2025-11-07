import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../lib/store/store";
import LoginToUserLoadingPage from "./login-to-user-loading-page";
import UserHomePage from "./user-home-page";

const UserPage = () => {
  const { name: _name_user } = useSelector(
    (state: RootState) => state.userGeneralSlice,
  );
  const [showFallback, setShowFallback] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowFallback(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (showFallback) {
    return <LoginToUserLoadingPage />;
  }

  return <UserHomePage />;
};

export default UserPage;
