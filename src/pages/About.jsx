function Posts() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 px-8 py-16 flex flex-col items-center">
        {/* Header Section */}
        <section className="text-center mb-16 max-w-4xl">
          <h1 className="text-5xl font-extrabold text-gray-900">ZECKAH'S | MEN'S CLOTHING SHOP</h1>
          <p className="mt-4 text-lg text-gray-600 font-medium">
            Elevate your style with the latest men's fashion, tailored for the modern man.
          </p>
        </section>
  
        {/* Posts Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mb-16">
          {/* Sample Post - Men's Fashion */}
          <div className="bg-white shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Classic Black Leather Jacket</h3>
              <p className="text-gray-600 text-base mb-4">
                A timeless black leather jacket for a sleek, stylish look. Perfect for casual or semi-formal occasions.
              </p>
              <div className="mt-4">
                <button className="px-6 py-2 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-700 transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          </div>
  
          <div className="bg-white shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Casual Navy Hoodie</h3>
              <p className="text-gray-600 text-base mb-4">
                Stay warm and comfortable with our stylish navy hoodie. Ideal for a laid-back, casual look.
              </p>
              <div className="mt-4">
                <button className="px-6 py-2 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-700 transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </section>
  
        {/* Comments Section */}
        <section className="mt-16 flex justify-center items-center max-w-4xl w-full">
          <div className="text-center w-full">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Customer Comments</h2>
            
            {/* Comment Display */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-800">"The leather jacket fits perfectly! A must-have in every man's wardrobe."</p>
                <span className="text-sm text-gray-600">- Mark Johnson</span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-800">"The hoodie is so comfy and stylish. Great for casual days out."</p>
                <span className="text-sm text-gray-600">- Luke Adams</span>
              </div>
            </div>
  
            {/* Comment Box */}
            <h3 className="text-xl font-semibold text-gray-900 mt-12 mb-4">Leave a Comment</h3>
            <form className="bg-gray-100 p-8 rounded-lg shadow-lg mx-auto max-w-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block text-lg text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="comment" className="block text-lg text-gray-700 font-medium mb-2">
                  Comment
                </label>
                <textarea
                  id="comment"
                  rows="4"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder="Enter your comment"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-700 transition-colors duration-300"
              >
                Submit Comment
              </button>
            </form>
          </div>
        </section>
      </div>
    );
  }
  
  export default Posts;
  