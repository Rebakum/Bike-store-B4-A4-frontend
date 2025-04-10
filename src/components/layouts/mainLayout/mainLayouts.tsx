import Navber from "@/components/shared/navber/Navber";

const MainLayouts = () => {
  return (
    <div>
      <div className="flex flex-col min-h-screen ">
        {/* Main content */}
        <Navber />
        <div className="flex-grow"></div>
      </div>
    </div>
  );
};

export default MainLayouts;
