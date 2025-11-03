import type { JSX } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./pages/login-page";
function PrivateRoute({ children }: { children: JSX.Element }) {
  // const { user } = useSelector((state: RootState) => state.userLogin);
  const isLoggedIn: boolean = false;
  return isLoggedIn ? children : <Navigate to="/login" />;
}

function PublicRoute({ children }: { children: JSX.Element }) {
  // const { user } = useSelector((state: RootState) => state.userLogin);
  const isLoggedIn = false;
  if (isLoggedIn) {
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
    path: "/user",
    element: <PrivateRoute children={<h1>User Page</h1>} />,
  },
  {
    path: "*",
    element: <h1>Page Not Found </h1>,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
