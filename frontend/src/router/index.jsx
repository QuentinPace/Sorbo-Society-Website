import { createBrowserRouter } from "react-router-dom";
import SignUpPage from "../components/Signup/SignUpPage.jsx";
import ProtectedRoute from "../components/ProtectedRoute.jsx";
import App from "../App";
import LoginPage from "../components/Login/LoginPage.jsx";
import LandingPage from "../components/Landing/Landing.jsx";
import DashboardPage from "../components/Dashboard/DashboardPage.jsx";

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
