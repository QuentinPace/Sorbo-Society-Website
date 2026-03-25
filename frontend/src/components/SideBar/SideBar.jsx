import { useState } from "react";
import { useUserStore } from "../../store/user";
import "./SideBar.css";

const SideBar = () => {
  const { logout } = useUserStore();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="options">
        <p>sidebar bby</p>
        <button>hide</button>
        <button onClick={logout}>logout</button>
      </div>
      <aside className="tab" onClick={() => setIsOpen((prev) => !prev)}></aside>
    </aside>
  );
};

export default SideBar;
