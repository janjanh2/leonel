import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaHome, FaInfoCircle, FaQuestionCircle } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <h4 className="text-xl font-bold text-blue-400 mb-4">About Us</h4>
          <p className="text-sm leading-relaxed">
            Welcome to ZECKAH'S | CLOTHING SHOP, your premier destination for modern and stylish menswear. 
            From casual to formal attire, we bring you quality clothing tailored for confidence and comfort.
            Redefine your wardrobe with Zeckah's!
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h4 className="text-xl font-bold text-blue-400 mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <FaHome className="text-blue-400" /> <a href="#" className="hover:text-white">Home</a>
            </li>
            <li className="flex items-center gap-3">
              <FaInfoCircle className="text-blue-400" /> <a href="#" className="hover:text-white">About</a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-400" /> <a href="#" className="hover:text-white">Contact</a>
            </li>
            <li className="flex items-center gap-3">
              <FaQuestionCircle className="text-blue-400" /> <a href="#" className="hover:text-white">FAQ</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-xl font-bold text-blue-400 mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-blue-400" /> support@zeckahsclothingshop.com
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-400" /> +1 987 654 3210
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-400" /> 123 Zeckah's Lane, Urban District
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} ZECKAH'S | CLOTHING SHOP. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
