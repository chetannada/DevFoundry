import { FiLogIn, FiLogOut } from "react-icons/fi";
import MenuItem from "../components/menu/MenuItem";
import { useEffect } from "react";

const Sidebar = ({ isLoggedIn, handleLogoutClick, handleLoginClick, sidebarOpen }) => {
  useEffect(() => {
    if (sidebarOpen) {
      document.body.classList.add("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [sidebarOpen]);

  return (
    <>
      <ul
        className={`fixed top-14 right-0 w-[40%] min-w-40 h-full bg-primary-light dark:bg-primary-dark z-20 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {isLoggedIn ? (
          <MenuItem icon={<FiLogOut />} label="Logout" onClick={handleLogoutClick} pxClass="px-8" />
        ) : (
          <MenuItem icon={<FiLogIn />} label="Login" onClick={handleLoginClick} pxClass="px-8" />
        )}
      </ul>
    </>
  );
};

export default Sidebar;
