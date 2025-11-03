import type { JSX } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./pages/login-page";
import LoginToUserLoadingPage from "./pages/login-to-user-loading-page";
import { useSelector } from "react-redux";
import type { RootState } from "./lib/store/store";
import { namePredictionsCollections2 } from "./lib/constants/constants";
import UserHomeLandingPage from "./pages/user-home-landing-page";
function PrivateRoute({ children }: { children: JSX.Element }) {
  const { name, isLoaded } = useSelector(
    (state: RootState) => state.userGeneralSlice
  );
  const _condition =
    name && namePredictionsCollections2.includes(name) && isLoaded;
  if (_condition) {
    return _condition ? children : <Navigate to="/login" />;
  }
}

function PublicRoute({ children }: { children: JSX.Element }) {
  const { name, isLoaded } = useSelector(
    (state: RootState) => state.userGeneralSlice
  );
  const _condition =
    name && namePredictionsCollections2.includes(name) && isLoaded;
  if (_condition) {
    return <Navigate to={"/user"} />;
  }
  return children;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicRoute children={<LoginPage />} />,
  },
  {
    path: "/login",
    element: <PublicRoute children={<LoginPage />} />,
  },
  {
    path: "/loading",
    element: <PublicRoute children={<LoginToUserLoadingPage />} />,
  },

  {
    path: "/user",
    element: <PrivateRoute children={<UserHomeLandingPage />} />,
  },
  {
    path: "*",
    element: <h1>Page Not Found </h1>,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
