import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Cronotime</h2>
          <p className="text-sm">
            Discover timeless collections of premium watches.  
            Elegance & precision crafted for every occasion.
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white text-white !no-underline">Men’s Watches</a></li>
            <li><a href="#" className="text-white !no-underline">Women’s Watches</a></li>
            <li><a href="#" className="text-white !no-underline">Smart Watches</a></li>
            <li><a href="#" className="text-white !no-underline">Luxury Collection</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-white !no-underline">About Us</a></li>
            <li><a href="#" className="text-white !no-underline">Contact</a></li>
            <li><a href="#" className="text-white !no-underline">Shipping & Returns</a></li>
            <li><a href="#" className="text-white !no-underline">FAQs</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-white !no-underline"><FaFacebookF /></a>
            <a href="#" className="text-white !no-underline"><FaInstagram /></a>
            <a href="#" className="text-white !no-underline"><FaTwitter /></a>
            <a href="#" className="text-white !no-underline"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} Cronotime. All rights reserved.
      </div>
    </footer>
  );
}