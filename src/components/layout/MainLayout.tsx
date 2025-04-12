import { Outlet } from "react-router-dom";
import ScrollToTop from "../shared/ScrollToTop";
import Navber from "../shared/navbar/Navbar";
import Footer from "../shared/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      {/* navigetions area */}
      <div className="">
        <Navber />
      </div>
      {/* Main content area*/}
      <div className="flex-grow ">
        <Outlet />
      </div>
      {/* footer area */}
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
