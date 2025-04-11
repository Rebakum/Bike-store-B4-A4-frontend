import bikeImage2 from "@/assets/image/bike-2.jpg";
import bikeImage3 from "@/assets/image/bike-3.jpg";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BikeDesign() {
  const navigate = useNavigate();
  return (
    <section className="container p-6 mx-auto text-white bg-black lg:p-12">
      <div className="grid items-center grid-cols-1 gap-10 lg:grid-cols-2">
        {/* Left Section - Text */}
        <div>
          <h1 className="text-3xl font-bold leading-tight  md:text-5xl">
            YOUR BIKE. YOUR STYLE. OUR INNOVATIVE DESIGN.
          </h1>
          <p className="mt-4 text-gray-300">
            You're unique—your bike should be too. Choose from nearly 2 million
            design and color combinations, plus top-tier components from leading
            brands, to create a ride that's truly yours.
          </p>
        </div>

        {/* Right Section - Video Preview */}
        <div className="relative group">
          <img
            src={bikeImage2}
            alt="Rider"
            className="object-cover w-full rounded-lg"
          />
          <button className="absolute inset-0 flex items-center justify-center transition duration-300 bg-black rounded-lg bg-opacity-40 hover:bg-opacity-50">
            <Play className="w-12 h-12 text-yellow-400" />
          </button>
        </div>
      </div>

      {/* Custom Bikes Section */}
      <div className="grid items-center grid-cols-1 gap-10 mt-12 md:grid-cols-2">
        <div className="relative">
          <img
            src={bikeImage3}
            alt="Custom Bike"
            className="object-cover w-full rounded-lg"
          />
          <button className="absolute p-2 text-black transition bg-yellow-400 rounded-full shadow-lg left-4 bottom-4 hover:bg-yellow-500">
            ←
          </button>
        </div>

        <div>
          <h2 className="text-xl font-bold uppercase">
            Featured Custom Bikes of the Month
          </h2>
          <p className="mt-2 text-gray-300">
            Discover standout creations this month: a jaw-dropping Yamaha GTS
            1000 from Italy, a stylish neo-retro Yamaha XT250 from Australia,
            and a sleek body kit for the BMW R nineT straight out of France.
          </p>

          <Button onClick={() => navigate("/bikes")} className="px-6 py-2 mt-4">
            See More
          </Button>
        </div>
      </div>
    </section>
  );
}
