import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
import ContentWrapper from "./ContentWrapper";

const Layout = () => {
  return (
    <>
      <div className="min-h-screen bg-body-light dark:bg-body-dark text-text-light dark:text-text-dark">
        <Header />

        {/* Render Body and it's children component */}
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>

        <Footer />

        <Toaster position="top-right" />
      </div>
    </>
  );
};

export default Layout;
