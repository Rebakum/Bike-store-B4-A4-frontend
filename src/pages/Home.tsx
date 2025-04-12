import Banner from "@/components/home/Banner";
import BikeDesign from "@/components/home/BikeDesign";
import BikeService from "@/components/home/BikeService";
import NewProducts from "@/components/home/NewProducts";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <div className="container px-4 mx-auto md:px-0">
        <div className="py-12 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 md:text-5xl">
            Featured Bikes
          </h2>
          <div className="flex items-center justify-center mt-2">
            <div className="w-12 h-0.5 bg-teal-700 mr-2"></div>
            <div className="w-3 h-3 rotate-45 bg-teal-700"></div>
            <div className="w-12 h-0.5 bg-teal-700 ml-2"></div>
          </div>
          <p className="max-w-xl mx-auto mt-3 text-lg text-gray-500">
            Discover our top-rated bikes – handpicked for performance, style,
            and innovation.
          </p>
        </div>
        <NewProducts />
        <div className="flex justify-center my-10">
          <Link to="/bikes">
            <button className="px-4 py-2 text-lg font-semibold duration-300 border-2 rounded-md pb text-black border-black hover:border-none hover:bg-primary-red hover:text-white">
              VIEW ALL
            </button>
          </Link>
        </div>
      </div>

      <div>
        <BikeDesign />
      </div>
      <div>
        <BikeService />
      </div>
    </div>
  );
};

export default Home;
