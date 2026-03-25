import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import { useUserStore } from "./store/user";

const App = () => {
  const hydrateUser = useUserStore((state) => state.hydrateUser);

  useEffect(() => {
    // put all state meta data fetches here
    hydrateUser();
  }, []);

  return <>
            <Outlet />
        </>
;
};

export default App;
