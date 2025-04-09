import aboutImage from "@/assets/images/hero-image/slider2.jpg";

export default function AboutUs() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Hero Title */}
        <h1 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-400 mb-12 animate-fade-in">
          More Than Just a Bike Shop
        </h1>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="space-y-6 animate-slide-up">
            <h2 className="text-3xl font-bold text-gray-900 font-[Poppins]">
              Your Cycling Journey Starts Here
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Bike Haven, we don't just sell bicycles - we fuel adventures.
              As Gazipur's premier cycling hub, we've helped over 5,000 riders
              find their perfect match, from casual commuters to trail
              conquerors.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our expert-curated collection features the latest models from top
              brands, each personally tested by our team to ensure unbeatable
              performance on Dhaka's diverse terrain.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Not sure what you need? Our "Find Your Ride" consultation matches
              you with the ideal bike based on your riding style, body type, and
              local routes.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center items-center group animate-fade-in">
            <img
              src={aboutImage}
              alt="Cycling enthusiasts at Bike Haven"
              className="rounded-xl shadow-2xl w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Value Propositions */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 font-[Poppins]">
            The Bike Haven Difference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🚴‍♂️",
                title: "Ride-Tested Selection",
                desc: "Every bike in our showroom has been personally vetted by our team on Dhaka roads - no surprises, just reliable performance.",
              },
              {
                icon: "⚡",
                title: "60-Minute Tune-Ups",
                desc: "Our express service gets you back on the road faster with a 100% satisfaction guarantee on all repairs.",
              },
              {
                icon: "🤝",
                title: "Lifetime Support",
                desc: "Free adjustments forever and exclusive discounts for returning customers - we grow with your cycling journey.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-white p-12 rounded-2xl shadow-inner border border-gray-200 animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-[Poppins]">
            Let's Start Your Next Adventure
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Visit us today and experience the Bike Haven way - where every rider
            gets VIP treatment and every bike comes adventure-ready.
          </p>
          <div className="space-y-4 max-w-md mx-auto">
            <p className="text-lg text-gray-700 flex items-center justify-center gap-2">
              <span className="bg-blue-100 p-2 rounded-full">📍</span>
              <span>123 Cycling Road, Gazipur, Dhaka</span>
            </p>
            <p className="text-lg text-gray-700 flex items-center justify-center gap-2">
              <span className="bg-blue-100 p-2 rounded-full">⏰</span>
              <span>Open Daily: 9AM - 8PM (Fri: 2PM - 8PM)</span>
            </p>
            <a
              href="tel:+8801913547448"
              className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Call Now: (+880) 19135-47448
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
