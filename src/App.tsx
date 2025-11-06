import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login-page";
import UserPage from "./pages/user-page";
import Error404Page from "./pages/error-404-page";
// import { namePredictionsCollections2 } from "./lib/constants/constants";
// import { useSelector } from "react-redux";
// import type { RootState } from "./lib/store/store";

// ------------------
// Hook to check auth
// ------------------
// function useAuth() {
//   const { name, isLoaded } = useSelector(
//     (state: RootState) => state.userGeneralSlice
//   );
//   const isAuthenticated = name && namePredictionsCollections2.includes(name);
//   return { isAuthenticated, isLoaded };
// }

// ------------------
// Private route
// ------------------
// function PrivateRoute({ children }: { children: JSX.Element }) {
//   const { name, isLoaded } = useSelector(
//     (state: RootState) => state.userGeneralSlice
//   );
//   const { isAuthenticated } = useAuth();
//   alert(`PrivateRoute: {${name}, ${isLoaded}, isAuthenticated }`);

//   return isAuthenticated ? children : <Navigate to="/login" />;
// }

// ------------------
// Public route
// ------------------
// function PublicRoute({ children }: { children: JSX.Element }) {
//   const { isAuthenticated } = useAuth();
//   return isAuthenticated ? <Navigate to="/user" /> : children;
// }

// ------------------
// Router setup
// ------------------
export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/user",
    element: <UserPage />,
  },
  {
    path: "*",
    element: <Error404Page />,
  },
]);

// ------------------
// App entry
// ------------------
export default function App() {
  return <RouterProvider router={router} />;
}
