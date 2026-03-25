import { useEffect } from "react";
import { useUserStore } from "../store/user";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({
  // this will hydrate the user and send to login if not logged in, wrap protected pages with this component
  children,
}) => {
  const { user } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (user === undefined) {
    return <h1>Loading...</h1>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
