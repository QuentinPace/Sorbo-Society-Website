import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import { useEffect } from "react";
// import { useUserStore } from "./store/user";

const App = () => {
  // const hydrateUser = useUserStore((state) => state.hydrateUser);

  // useEffect(() => {
  //   // put all state meta data fetches here
  //   // hydrateUser();
  // }, []);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
