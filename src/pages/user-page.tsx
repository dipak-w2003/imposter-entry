import { lazy, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../lib/store/store";
const UserHomePage = lazy(() => import("./user-home-page"));
const UserWishingP2Page = lazy(() => import("./user-wishing-p2-page"));
const UserMomentsMemoriesP3Page = lazy(
  () => import("./user-moments-memories-p3-page"),
);
const UserHowISeeHerP4Page = lazy(() => import("./user-how-i-see-her-p4-page"));
const UserHeartWarmmingWishingP5Page = lazy(
  () => import("./user-heart-warmming-wishing-p5-page"),
);

const LoginToUserLoadingPage = lazy(
  () => import("./login-to-user-loading-page"),
);
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

  return (
    <main className="relative bg-[#434978]">
      <UserHomePage />
      <UserWishingP2Page />
      <UserMomentsMemoriesP3Page />
      <UserHowISeeHerP4Page />
      <UserHeartWarmmingWishingP5Page />
    </main>
  );
};

export default UserPage;
