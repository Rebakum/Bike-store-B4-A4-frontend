import aboutImage from "@/assets/image/bike-22.jpg";

export default function About() {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container px-4 mx-auto">
        <h1 className="mb-12 text-4xl font-bold text-center text-primary">
          About Us
        </h1>

        {/* Section with Image Background */}
        <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Text Content */}
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-secondary">
              Welcome to Bike Haven
            </h2>
            <p className="mb-6 leading-relaxed text-gray-700">
              Bike Haven is your one-stop destination for premium bicycles,
              accessories, and expert repair services. Based in Gazipur, Dhaka,
              Bangladesh, our mission is to promote cycling as a lifestyle
              choice by offering high-quality products and outstanding customer
              service.
            </p>
            <p className="mb-6 leading-relaxed text-gray-700">
              Whether you're a professional cyclist, a weekend rider, or just
              looking for an eco-friendly way to commute, we've got something
              for everyone. Join our vibrant community of biking enthusiasts and
              explore the joy of cycling with us!
            </p>
            <p className="leading-relaxed text-gray-700">
              Our knowledgeable staff is always ready to assist you in selecting
              the perfect bike or accessories to meet your needs. Your
              satisfaction is our top priority!
            </p>
          </div>

          {/* Background Image Block */}
          <div
            className="w-full h-[450px] rounded-lg shadow-lg bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${aboutImage})` }}
          ></div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-20">
          <h2 className="mb-6 text-2xl font-semibold text-center text-secondary">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-2xl text-white rounded-full bg-primary">
                🚴
              </div>
              <h3 className="mb-2 text-lg font-semibold">
                Wide Range of Products
              </h3>
              <p className="text-gray-600">
                From mountain bikes to accessories, we have everything you need
                for an amazing cycling experience.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-2xl text-white rounded-full bg-primary">
                🛠
              </div>
              <h3 className="mb-2 text-lg font-semibold">
                Expert Repair Services
              </h3>
              <p className="text-gray-600">
                Our skilled technicians handle all kinds of repairs and
                maintenance to keep your bike in top shape.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-2xl text-white rounded-full bg-primary">
                ⭐
              </div>
              <h3 className="mb-2 text-lg font-semibold">
                Customer Satisfaction
              </h3>
              <p className="text-gray-600">
                Your happiness matters to us! We strive to provide the best
                service and support to all our customers.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <h2 className="mb-4 text-2xl font-semibold text-secondary">
            Contact Us
          </h2>
          <p className="mb-2 text-gray-700">
            📍 Address: Gazipur, Dhaka, Bangladesh
          </p>
          <p className="mb-2 text-gray-700">📧 Email: devrakibmia@gmail.com</p>
          <p className="text-gray-700">📞 Phone: (+880) 19135-47448</p>
        </div>
      </div>
    </div>
  );
}
