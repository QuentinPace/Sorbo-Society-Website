import { createBrowserRouter } from "react-router-dom";
import SignUpPage from "../components/Signup/SignUpPage.jsx";
import ProtectedRoute from "../components/ProtectedRoute.jsx";
import App from "../App";
import LoginPage from "../components/Login/LoginPage.jsx";
import LandingPage from "../components/landing/Landing.jsx";
import DashboardPage from "../components/Dashboard/DashboardPage.jsx";
import NotFound from "../components/NotFound/NotFound.jsx";
import DiscoveryBox from "../components/DiscoveryBox/DiscoveryBox.jsx";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/discovery-box",
        element: <DiscoveryBox />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      // {
      //   path: "/signup",
      //   element: <SignUpPage />,
      // },
      // {
      //   path: "/login",
      //   element: <LoginPage />,
      // },
      // {
      //   path: "/dashboard",
      //   element: (
      //     <ProtectedRoute>
      //       <DashboardPage />
      //     </ProtectedRoute>
      //   ),
      // },
    ],
  },
]);
