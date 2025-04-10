import { Outlet } from "react-router-dom";
import ScrollToTop from "../shared/ScrollToTop";
import Navber from "../shared/navber/Navber";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen px-4 py-4">
      <ScrollToTop />
      <Navber />
      {/* Main content */}
      <div className="flex-grow py-6">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
