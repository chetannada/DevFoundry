import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
import ContentWrapper from "./ContentWrapper";

const Layout = () => {
  return (
    <>
      <div className="min-h-screen bg-background-light dark:bg-background-dark">
        {/* Header Component */}
        <Header />

        {/* Outlet is for render Body and it's Children Component */}
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>

        {/* Footer Component */}
        <Footer />

        {/* Manage all Toast notifications */}
        <Toaster position="top-right" />
      </div>
    </>
  );
};

export default Layout;
