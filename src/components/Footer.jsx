import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal } from "react-icons/fa";

export default function Footer() {
  return (
    <>
    <footer className="bg-gray-800 text-gray-300 py-6 relative bottom-0">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 pb-10 border-b border-gray-700">
          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Press</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Trust & Safety</a></li>
            </ul>
          </div>

          {/* Other Services */}


    

          {/* Newsletter & App */}
          <div>
            <h3 className="text-white font-semibold mb-4">Subscribe to our Newsletter</h3>
            <form className="flex space-x-2 mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-lg bg-gray-800 text-gray-300 focus:outline-none"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white">
                Subscribe
              </button>
            </form>
            <div>
              <p className="mb-2">Download our app</p>
              <div className="flex space-x-2">
                <a href="#">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb5LOPUgzjbz_m4aVulC-GU5zu-30HBdYnAg&s"
                    alt="Google Play"
                    className="h-10"
                  />
                </a>
                <a href="#">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa-JDxQbs5MCqbpmEsgcN_Apap-EZOn8SZLQ&s"
                    alt="App Store"
                    className="h-10"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm">
          {/* Social Links */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-white"><FaYoutube /></a>
          </div>

          {/* Copyright */}
          <div className="flex flex-col items-center md:items-end">
            <p>&copy; 2023 FlyGo. All rights reserved.</p>
            <div className="flex space-x-3 mt-2 text-2xl">
              <FaCcVisa />
              <FaCcMastercard />
              <FaCcAmex />
              <FaCcPaypal />
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}