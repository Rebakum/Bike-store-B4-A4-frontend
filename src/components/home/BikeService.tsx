import bikeImage1 from "@/assets/image/bike-1.jpg";
import { useNavigate } from "react-router-dom";

const BikeService = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto lg:py-10">
        <h2 className="text-4xl font-extrabold leading-tight text-center text-gray-900 md:text-5xl">
          Professional Bike Services
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-center text-gray-500">
          Premium bike maintenance, repairs, and customizations handled by
          experienced mechanics — built for riders who expect the best.
        </p>

        <div className="grid items-center grid-cols-1 gap-12 py-10 md:grid-cols-2">
          {/* Left - Content */}
          <div className="space-y-6">
            {/* Service 1 */}
            <div className="flex items-start gap-4">
              <span className="text-xl font-bold text-red-500">01.</span>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Performance Tune-Ups
                </h4>
                <p className="mt-1 text-gray-600">
                  Boost efficiency and smoothness with expert tuning designed
                  for peak performance.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="flex items-start gap-4">
              <span className="text-xl font-bold text-red-500">02.</span>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Installation & Upgrades
                </h4>
                <p className="mt-1 text-gray-600">
                  From brakes to drivetrains, we install components with
                  precision and care.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="flex items-start gap-4">
              <span className="text-xl font-bold text-red-500">03.</span>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Custom Bike Fittings
                </h4>
                <p className="mt-1 text-gray-600">
                  Ensure ultimate comfort and posture with personalized bike
                  fitting sessions.
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="flex items-start gap-4">
              <span className="text-xl font-bold text-red-500">04.</span>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Free Pickup & Delivery
                </h4>
                <p className="mt-1 text-gray-600">
                  Schedule repairs and enjoy doorstep service — quick, easy, and
                  free.
                </p>
              </div>
            </div>

            <button
              onClick={() => navigate("/bikes")}
              className="inline-block px-6 py-3 mt-6 text-sm font-semibold text-white transition bg-red-600 rounded-lg shadow-md hover:bg-red-700"
            >
              Browse Our Bikes
            </button>
          </div>

          {/* Right - Image */}
          <div className="flex justify-center py-10 ">
            <img
              src={bikeImage1}
              alt="Bike Service"
              className="w-full  h-[450px] shadow-xl rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BikeService;
