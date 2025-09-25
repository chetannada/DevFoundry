import axios from "axios";
import { useEffect, useState } from "react";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import UserMenu from "../components/menu/UserMenu";
import ThemeToggle from "../components/theme/ThemeToggle";
import useWindowSize from "../hooks/useWindowSize";
import { fetchUser, logoutUser } from "../store/reducers/authSlice";
import strings from "../utils/strings";
import Sidebar from "./Sidebar";
import { FaGithub } from "react-icons/fa";
import ActionModal from "../components/modal/ActionModal";

axios.defaults.withCredentials = true;

const Header = () => {
  const dispatch = useDispatch();
  const { user, isLoggedIn, isAuthReady } = useSelector(state => state.auth);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const windowSize = useWindowSize();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  useEffect(() => {
    if (windowSize.width > 1024) {
      setSidebarOpen(false);
    }
  }, [windowSize.width]);

  const handleSidebar = () => setSidebarOpen(!sidebarOpen);
  const handleLoginClick = () => setShowLoginModal(true);

  const handleOnLogin = () => {
    setIsDisabled(true);

    const API_BACKEND_URL = import.meta.env.VITE_API_BACKEND_URL;
    window.location.href = `${API_BACKEND_URL}/auth/github`;
  };

  const handleLogoutClick = () => setShowLogoutModal(true);
  const handleOnLogout = () => {
    setShowLogoutModal(false);
    setSidebarOpen(false);
    dispatch(logoutUser());
  };

  const renderAuthUI = () => {
    if (!isAuthReady) return null;

    return (
      <>
        {!sidebarOpen && (
          <>
            <ThemeToggle />
            {isLoggedIn && user ? (
              <UserMenu user={user} handleLogoutClick={handleLogoutClick} />
            ) : (
              <div className="block maxLg:hidden">
                <button
                  onClick={handleLoginClick}
                  className="flex flex-row gap-2 items-center text-white bg-gradient-to-br from-green-500 to-green-700 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2"
                >
                  <FiLogIn size={18} />
                  Login
                </button>
              </div>
            )}
          </>
        )}
      </>
    );
  };

  return (
    <>
      <header className="fixed top-0 z-50 px-8 max2xs:px-4 h-14 w-full bg-primary-light dark:bg-primary-dark border-b-4 border-b-secondary-light dark:border-b-secondary-dark transition-colors duration-300">
        <nav className="flex justify-between items-center h-full">
          <a href="/">
            <h1 className="text-2xl max2xs:text-xl max3xs:text-base font-semibold tracking-widest">
              <span className="text-secondary-light dark:text-secondary-dark">Dev</span>
              Foundry
            </h1>
          </a>

          <div className="flex items-center gap-2">
            {renderAuthUI()}

            <div
              onClick={handleSidebar}
              className="hidden maxLg:block ml-1 text-3xl max2xs:text-2xl cursor-pointer"
            >
              {sidebarOpen ? <IoMdClose /> : <IoMdMenu />}
            </div>
          </div>

          {sidebarOpen && (
            <>
              <Sidebar
                isLoggedIn={isLoggedIn}
                handleLogoutClick={handleLogoutClick}
                handleLoginClick={handleLoginClick}
                sidebarOpen={sidebarOpen}
              />
            </>
          )}

          {/* Login Modal */}
          <ActionModal
            isOpen={showLoginModal}
            onClose={() => setShowLoginModal(false)}
            title={strings.loginHeaderTitle}
            description={strings.loginHeaderDescription}
            onConfirm={handleOnLogin}
            confirmClass={`flex justify-center items-center gap-2 text-sm px-5 py-2.5 font-medium rounded-lg
      text-white bg-gradient-to-br from-purple-500 to-blue-800
      hover:bg-gradient-to-bl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gradient-to-br`}
            confirmIcon={() => <FaGithub size={18} />}
            confirmLabel={"Login with GitHub"}
            isDisabled={isDisabled}
          />

          {/* Logout Modal */}
          <ActionModal
            isOpen={showLogoutModal}
            onClose={() => setShowLogoutModal(false)}
            title={strings.logoutHeaderTitle}
            description={strings.logoutHeaderDescription}
            onConfirm={handleOnLogout}
            confirmClass={`flex justify-center items-center gap-2 text-sm px-5 py-2.5 font-medium rounded-lg
    text-white bg-gradient-to-br from-purple-500 to-blue-800 hover:bg-gradient-to-bl`}
            confirmIcon={() => <FiLogOut size={18} />}
            confirmLabel={"Confirm Logout"}
            isDisabled={isDisabled}
          />
        </nav>
      </header>
    </>
  );
};

export default Header;
