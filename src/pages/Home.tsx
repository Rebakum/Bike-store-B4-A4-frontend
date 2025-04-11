import Banner from "@/components/home/Banner";
import BikeDesign from "@/components/home/BikeDesign";
import BikeService from "@/components/home/BikeService";
import NewProducts from "@/components/home/NewProducts";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Banner />
      <div className="container px-4 mx-auto md:px-0">
        <div className="py-12 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 md:text-5xl">
            Featured Bikes
          </h2>
          <p className="max-w-xl mx-auto mt-3 text-lg text-gray-500">
            Discover our top-rated bikes – handpicked for performance, style,
            and innovation.
          </p>
        </div>
        <NewProducts />
        <div className="flex justify-center mb-8">
          <Link to="/bikes">
            <button className="px-3 text-lg font-semibold duration-300 border-2 rounded-md pb text-primary-red border-primary-red hover:bg-primary-red hover:text-white">
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
