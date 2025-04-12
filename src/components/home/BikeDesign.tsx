import bikeImage7 from "@/assets/image/bike-7.jpg";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

export default function BikeDesign() {
  const navigate = useNavigate();

  return (
    <section className=" container mx-auto relative overflow-hidden bg-[#0e1a36] text-white py-20 px-5 lg:px-24">
      <div className="relative z-10 grid grid-cols-1 gap-10 p-5 lg:grid-cols-3">
        {/* Left - Brand & Title */}
        <div className="relative z-20 lg:text-left">
          <div className="absolute">
            <h2 className="text-4xl font-bold tracking-wide uppercase">
              BIKE SHOPE
            </h2>
            <h1 className="text-[80px] lg:text-[100px] font-extrabold leading-tight mt-2">
              MT76
            </h1>
          </div>
        </div>

        {/* Middle - Featured Bike */}
        <div className="z-0 flex justify-center">
          <div className="transform scale-105 shadow-2xl rotate-12">
            <img
              src={bikeImage7}
              alt="Featured Bike"
              className="rounded-3xl max-w-[400px] lg:max-w-[600px] object-cover"
            />
          </div>
        </div>

        {/* Right - Offer Details */}
        <div className="z-20 text-center lg:text-left">
          <h3 className="text-xl font-bold text-gray-200 uppercase">
            Latest Offer
          </h3>
          <h2 className="mb-4 text-3xl font-bold uppercase">
            For Popular Bikes
          </h2>
          <p className="mb-6 leading-relaxed text-gray-300">
            <span className="font-bold text-white">BikeShope</span> is the
            latest and greatest place to grab high-quality motorcycles. We offer
            custom bikes, great prices, and even trade-ins. Discover amazing
            deals and get riding today.
          </p>
          <h3 className="text-2xl font-bold uppercase">
            Now At <span className="text-[#f9aa00] text-3xl">$1250</span>
          </h3>
          <p className="mt-1 text-sm font-semibold text-gray-400">
            35% Discount
          </p>

          <Button
            onClick={() => navigate("/bikes")}
            className="px-6 py-2 mt-6 bg-[#f9aa00] text-black font-bold hover:bg-[#e89a00]"
          >
            See More
          </Button>
        </div>
      </div>

      {/* Background Effect */}
      <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-[#f9aa00] rounded-full blur-3xl opacity-30"></div>
    </section>
  );
}
