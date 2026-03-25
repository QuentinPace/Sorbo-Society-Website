import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/user";
import { useScreeningsStore } from "../../store/screenings";
import SideBar from "../SideBar/SideBar";
import "./DashboardPage.css";
import { useEffect } from "react";

const DashboardPage = () => {
  const { user, login, logout } = useUserStore();
  const { finished, ongoing, readyForReview, hydrateUserScreenings } =
    useScreeningsStore();
  const navigate = useNavigate();

  console.log(user)

  useEffect(() => {
    console.log("here")
    hydrateUserScreenings();
  }, []);

  return (
    <div className="dashboard">
      <SideBar />
      <main className="dashboard-body">
        <section className="top-buttons-container">
          <button>Start a screening process</button>
          <button>Learn how it works</button>
        </section>
        <section className="ongoing-container"></section>
        <section className="finished-container"></section>
        <section className="ready-for-review-container"></section>
      </main>
    </div>
  );
};

export default DashboardPage;
