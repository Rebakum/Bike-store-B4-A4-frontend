import { Outlet } from "react-router-dom";
import ScrollToTop from "../shared/ScrollToTop";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <ScrollToTop />

      {/* Main content */}
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
