function HomePage() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        {/* Hero Section */}
        <section className="text-center py-20">
          <h2 className="text-5xl font-extrabold text-blue-800">
            Elevate Your Style
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore our curated collection of premium menswear and accessories for every occasion.
          </p>
          <a
            href="/Products"
            className="mt-6 inline-block px-8 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Shop Now
          </a>
        </section>
  
        {/* Featured Section */}
        <section className="py-16 bg-white text-gray-800">
          <h3 className="text-3xl font-bold text-center text-blue-800 mb-8">
            Featured Collections
          </h3>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition">
              <h4 className="text-xl font-semibold text-blue-800 mb-2">
                Outerwear
              </h4>
              <p className="text-gray-700">
                Stay sharp and warm with our premium jackets, coats, and blazers.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition">
              <h4 className="text-xl font-semibold text-blue-800 mb-2">
                Footwear
              </h4>
              <p className="text-gray-700">
                Step up your game with our collection of stylish and durable shoes.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition">
              <h4 className="text-xl font-semibold text-blue-800 mb-2">
                Accessories
              </h4>
              <p className="text-gray-700">
                Complete your look with sleek belts, watches, and more.
              </p>
            </div>
          </div>
        </section>
  
        {/* Call to Action */}
        <section className="text-center py-16 bg-gradient-to-b from-gray-100 to-gray-200">
          <h3 className="text-4xl font-bold text-blue-800 mb-6">
            Be Part of the Style Revolution
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Join our community and get access to the latest trends and exclusive offers.
          </p>
          <a
            href="/About"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Learn More About Us
          </a>
        </section>
      </div>
    );
  }
  
  export default HomePage;
  