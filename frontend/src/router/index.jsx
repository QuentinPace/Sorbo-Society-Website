import { createBrowserRouter } from "react-router-dom";
import SignUpPage from "../components/Signup/SignUpPage";
import ProtectedRoute from "../components/ProtectedRoute";
import App from "../App";
import LoginPage from "../components/Login/LoginPage";
import LandingPage from "../components/Landing/Landing";
import DashboardPage from "../components/Dashboard/DashboardPage";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
