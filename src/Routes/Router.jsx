import { createBrowserRouter } from "react-router-dom";

import HomePage from "../Pages/HomePage";
import ProfilePage from "../Pages/ProfilePage";

import MainLayout from "../Components/Layout/MainLayout";
import ProgramPage from "../Pages/ProgramPage";
import SchedulePage from "../Pages/Schedule";
import StudentList from "../Pages/StudentList";

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
      {
        path: "program",
        element: <ProgramPage />,
      },
      {
        path: "/student",
        element: <StudentList />,
      },
      {
        path: "Schedule",
        element: <SchedulePage />,
      },
    ],
  },
]);

export default router;