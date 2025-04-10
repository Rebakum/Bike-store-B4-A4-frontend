import { Outlet } from "react-router-dom";
import ScrollToTop from "../shared/ScrollToTop";
import Navber from "../shared/navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen px-4 py-4">
      <ScrollToTop />
      {/* navigetions area */}
      <div className="">
        <Navber />
      </div>
      {/* Main content area*/}
      <div className="flex-grow py-6">
        <Outlet />
      </div>
      {/* footer area */}
      <div className=""></div>
    </div>
  );
};

export default MainLayout;
