import bikeimg19 from "@/assets/image/bike-19.jpg";
import bikeimg20 from "@/assets/image/bike-20.jpg";
import bikeimg21 from "@/assets/image/bike-21.jpg";

export default function Services() {
  const services = [
    {
      title: "Custom Bike Design",
      description:
        "Get a personalized bike that reflects your personality. Choose from unique designs, parts, and colors.",
      image: bikeimg20,
    },
    {
      title: "Repair & Maintenance",
      description:
        "Keep your bike in top condition with expert repair and maintenance services by certified technicians.",
      image: bikeimg21,
    },
    {
      title: "Performance Upgrades",
      description:
        "Enhance your bike's performance with premium parts and accessories for speed and endurance.",
      image: bikeimg19,
    },
  ];

  return (
    <div className="py-20 bg-matteWhite text-darkBlue">
      {/* Header */}
      <div className="text-center">
        <h1 className="py-3 text-4xl font-bold text-crimsonRed animate-fade-in">
          Our Services
        </h1>
        <div className="flex items-center justify-center mt-2">
          <div className="w-12 h-0.5 bg-[#FF0000] mr-2"></div>
          <div className="w-3 h-3 rotate-45 bg-[#FF0000]"></div>
          <div className="w-12 h-0.5 bg-[#FF0000] ml-2"></div>
        </div>
        <p className="w-1/2 mx-auto mt-5 mb-10 text-lg text-gray-600">
          We provide the best solutions for your biking needs. Whether you're
          looking for repairs, customizations, or rentals, we’ve got you
          covered.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 gap-8 px-6 mt-10 md:grid-cols-2 lg:grid-cols-3 lg:px-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="overflow-hidden transition duration-300 transform bg-white shadow-lg group rounded-2xl hover:-translate-y-2"
          >
            {/* Service Image */}
            <div className="relative">
              <img
                src={service.image}
                alt={service.title}
                className="object-cover w-full h-56"
              />
              <div className="absolute inset-0 transition-opacity duration-300 bg-gradient-to-b from-transparent to-black opacity-30 group-hover:opacity-50"></div>
            </div>

            {/* Service Content */}
            <div className="p-6">
              <h2 className="mb-2 text-xl font-semibold text-black">
                {service.title}
              </h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Call-to-Action Banner */}
      <div className="px-6 py-8 mt-16 text-center text-white rounded-lg shadow-lg bg-darkBlue lg:px-12 md:flex md:justify-between md:items-center">
        <h3 className="text-2xl font-bold">
          Ready to transform your biking experience?
        </h3>
        <button className="px-6 py-3 mt-4 font-medium transition-all duration-300 rounded-lg md:mt-0 bg-neonGreen text-darkBlue hover:bg-crimsonRed hover:text-white">
          Contact Us Now
        </button>
      </div>
    </div>
  );
}
