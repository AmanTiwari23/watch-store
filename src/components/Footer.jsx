import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCrown, FaCreditCard, FaShippingFast, FaShieldAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-indigo-500 rounded-full blur-2xl" />
      </div>

      {/* Newsletter Section */}
      <div className="relative z-10 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Cronotime
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Get exclusive offers, new arrivals, and watch care tips delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <div className="flex-1 relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                <FaCrown className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-black text-transparent bg-gradient-to-r from-white to-blue-400 bg-clip-text">
                Cronotime
              </h2>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 text-base">
              Discover timeless collections of premium watches. Elegance & precision crafted for every occasion.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-400">
                <FaPhone className="w-4 h-4 mr-3 text-blue-400" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <FaEnvelope className="w-4 h-4 mr-3 text-purple-400" />
                <span>info@cronotime.com</span>
              </div>
              <div className="flex items-start text-sm text-gray-400">
                <FaMapMarkerAlt className="w-4 h-4 mr-3 text-red-400 mt-0.5" />
                <span>123 Watch Street, Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 relative">
              Shop
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
            </h3>
            <ul className="space-y-4">
              {[
                "Men's Watches",
                "Women's Watches", 
                "Smart Watches",
                "Luxury Collection",
                "Limited Editions",
                "Gift Cards"
              ].map((item, index) => (
                <li key={index}>
                 <a 
  href="#" 
  className="!text-gray-400 hover:!text-white !no-underline !transition-all !duration-300 hover:!translate-x-2 !inline-block group relative !p-1 !rounded-lg hover:!bg-gradient-to-r hover:!from-blue-600/20 hover:!to-purple-600/20"
>
                    <span className="relative z-10">{item}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 relative">
              Support
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full" />
            </h3>
            <ul className="space-y-4">
              {[
                "About Us",
                "Contact Support",
                "Shipping & Returns",
                "Size Guide",
                "Warranty Info",
                "FAQs"
              ].map((item, index) => (
                <li key={index}>
                  <a 
  href="#" 
  className="!text-gray-400 hover:!text-white !no-underline !transition-all !duration-300 hover:!translate-x-2 !inline-block group relative !p-1 !rounded-lg hover:!bg-gradient-to-r hover:!from-blue-600/20 hover:!to-purple-600/20"
>
                    <span className="relative z-10">{item}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Trust Badges */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 relative">
              Connect
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-pink-600 to-red-600 rounded-full" />
            </h3>
            
            {/* Social Media */}
            <div className="flex gap-4 mb-8">
              {[
                { icon: FaFacebookF, color: "from-blue-600 to-blue-700", hoverColor: "hover:from-blue-500 hover:to-blue-600" },
                { icon: FaInstagram, color: "from-pink-500 to-purple-600", hoverColor: "hover:from-pink-400 hover:to-purple-500" },
                { icon: FaTwitter, color: "from-blue-400 to-blue-500", hoverColor: "hover:from-blue-300 hover:to-blue-400" },
                { icon: FaYoutube, color: "from-red-600 to-red-700", hoverColor: "hover:from-red-500 hover:to-red-600" }
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href="#"
                    className={`w-12 h-12 bg-gradient-to-r ${social.color} ${social.hoverColor} rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl group`}
                  >
                    <Icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  </a>
                );
              })}
            </div>

            {/* Trust Badges */}
            <div>
              <p className="text-sm font-semibold text-white mb-4">Why Choose Us?</p>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
                    <FaShieldAlt className="w-4 h-4 text-white" />
                  </div>
                  <span>2 Year Warranty</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                    <FaShippingFast className="w-4 h-4 text-white" />
                  </div>
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mr-3">
                    <FaCreditCard className="w-4 h-4 text-white" />
                  </div>
                  <span>Secure Payment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-gray-800/50 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © {new Date().getFullYear()} Cronotime. All rights reserved.
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Crafted with ❤️ for watch enthusiasts
              </p>
            </div>
            
            {/* Payment Methods */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">Accepted Payments:</span>
              <div className="flex gap-2">
                {["VISA", "MC", "AMEX", "PP"].map((payment, index) => (
                  <div
                    key={index}
                    className="w-12 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-xs font-bold text-gray-400 border border-gray-700"
                  >
                    {payment}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6 pt-6 border-t border-gray-800/30">
            {["Privacy Policy", "Terms of Service", "Cookie Policy", "Sitemap"].map((link, index) => (
              <a
                key={index}
                href="#"
                className="!text-sm !text-gray-500 !hover:text-gray-300 !transition-colors !duration-300 !no-underline"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}