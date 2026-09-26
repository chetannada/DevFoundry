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
import Logo from "./Logo";

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
  }, []);

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

  const renderActionGroup = () => {
    return (
      <div className="flex items-center gap-1 rounded-full border border-border-light dark:border-border-dark bg-white/60 dark:bg-white/5 backdrop-blur-sm px-1 py-0.5 transition-colors duration-300">
        <a
          href="https://github.com/chetannada/DevFoundry"
          target="_blank"
          title="Github Repository"
          className="flex items-center gap-1.5 rounded-full px-2 py-0.5 text-text-light dark:text-text-dark hover:bg-black/5 dark:hover:bg-white/10 transition-colors duration-200"
        >
          <FaGithub size={18} />
          <span className="text-sm font-medium maxXs:hidden">GitHub</span>
        </a>

        <div className="w-px h-5 bg-border-light dark:bg-border-dark" />

        <ThemeToggle />
      </div>
    );
  };

  const renderAuthUI = () => {
    if (!isAuthReady) return <>{renderActionGroup()}</>;

    return (
      <>
        {!sidebarOpen && (
          <>
            {renderActionGroup()}

            {isLoggedIn && user ? (
              <UserMenu user={user} handleLogoutClick={handleLogoutClick} />
            ) : (
              <div className="block maxLg:hidden">
                <button
                  onClick={handleLoginClick}
                  className="flex flex-row gap-2 items-center text-white bg-gradient-to-br from-green-500 to-green-700 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2 transition-all duration-200 hover:shadow-lg hover:shadow-green-500/25"
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
      <header className="fixed top-0 z-50 h-14 w-full bg-primary-light/80 dark:bg-primary-dark/80 backdrop-blur-md border-b border-b-border-light/50 dark:border-b-border-dark/50 transition-all duration-300">
        <nav className="max-w-7xl mx-auto px-8 max2xs:px-4 flex justify-between items-center h-full">
          <a href="/" className="transition-opacity duration-200 hover:opacity-80">
            <Logo />
          </a>

          <div className="flex items-center gap-3">
            {renderAuthUI()}

            <div
              onClick={handleSidebar}
              className="hidden maxLg:block ml-1 text-3xl max2xs:text-2xl cursor-pointer text-text-light dark:text-text-dark hover:text-secondary-light dark:hover:text-secondary-dark transition-colors duration-200 relative z-[60]"
            >
              {sidebarOpen ? <IoMdClose /> : <IoMdMenu />}
            </div>
          </div>
        </nav>
      </header>

      {sidebarOpen && (
        <Sidebar
          isLoggedIn={isLoggedIn}
          handleLogoutClick={handleLogoutClick}
          handleLoginClick={handleLoginClick}
          sidebarOpen={sidebarOpen}
          onClose={handleSidebar}
        />
      )}

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
    </>
  );
};

export default Header;
