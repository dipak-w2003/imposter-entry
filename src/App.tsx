import type { JSX } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "./lib/store/store";

import LoginPage from "./pages/login-page";
import LoginToUserLoadingPage from "./pages/login-to-user-loading-page";
import { namePredictionsCollections2 } from "./lib/constants/constants";
import Error404Page from "./pages/error-404-page";
import UserPage from "./pages/user-page";

// ✅ Helper hook for cleaner logic reuse
function useAuth() {
  const { name, isLoaded } = useSelector(
    (state: RootState) => state.userGeneralSlice
  );
  const isAuthenticated =
    !!name && namePredictionsCollections2.includes(name ?? "");
  return { isAuthenticated, isLoaded };
}

// ✅ Private route wrapper
function PrivateRoute({ children }: { children: JSX.Element }) {
  const { isAuthenticated, isLoaded } = useAuth();

  // Optional loader handling
  if (!isAuthenticated) return <LoginToUserLoadingPage />;
  if (!isLoaded && isAuthenticated) return <LoginToUserLoadingPage />;

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

// ✅ Public route wrapper
function PublicRoute({ children }: { children: JSX.Element }) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Navigate to="/user" replace /> : children;
}

// ✅ Router setup
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
  {
    path: "/user",
    element: (
      <PrivateRoute>
        <UserPage />
      </PrivateRoute>
    ),
  },
  {
    path: "*",
    element: <Error404Page />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
