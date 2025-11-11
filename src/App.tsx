import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const LoginPage = lazy(() => import("./pages/login-page"));
const UserPage = lazy(() => import("./pages/user-page"));
const Error404Page = lazy(() => import("./pages/error-404-page"));
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
  {
    path: "/xyz",
    element: <main className="h-dvh w-dvw bg-black"></main>,
  },
]);

// ------------------
// App entry
// ------------------
export default function App() {
  return (
    <main className="flex flex-col relative z-99999 ">
      <RouterProvider router={router} />
    </main>
  );
}
