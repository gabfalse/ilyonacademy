import { createBrowserRouter } from "react-router-dom";

import HomePage from "../Pages/HomePage";
import ProfilePage from "../Pages/ProfilePage";

import MainLayout from "../Components/Layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
    ],
  },
]);

export default router;