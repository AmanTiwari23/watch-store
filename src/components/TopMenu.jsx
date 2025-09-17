import React, { useState, useEffect } from "react";
import {
  FiSearch,
  FiUser,
  FiShoppingBag,
  FiHeart,
  FiMenu,
  FiX,
  FiLogOut,
  FiSettings,
  FiPackage,
  FiChevronDown,
} from "react-icons/fi";

import logo from "../images/cronotime.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../store";

const TopMenu = () => {
  const cartData = useSelector(store => store.mycart.cart);
  const cartLength = cartData.length;
  
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  
  // Get user data from localStorage
  const [currentUser, setCurrentUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const toggleMobile = () => setMobileOpen((s) => !s);

  // Check for logged in user
  useEffect(() => {
    const checkUserStatus = () => {
      const userData = localStorage.getItem("user");
      const adminCheck = localStorage.getItem("isAdmin"); // You might store admin status separately
      
      if (userData) {
        try {
          const user = JSON.parse(userData);
          setCurrentUser(user);
        } catch (error) {
          console.error("Error parsing user data:", error);
          localStorage.removeItem("user");
        }
      }

      // Check if current session is admin (you can modify this logic based on your needs)
      setIsAdmin(adminCheck === "true");
    };

    checkUserStatus();
    
    // Listen for storage changes to update user status in real-time
    window.addEventListener('storage', checkUserStatus);
    return () => window.removeEventListener('storage', checkUserStatus);
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isAdmin");
    setCurrentUser(null);
    setIsAdmin(false);
    setUserDropdownOpen(false);
    navigate("/");
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userDropdownOpen && !event.target.closest('.user-dropdown')) {
        setUserDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [userDropdownOpen]);

  return (
    <>
      <header className={`w-full bg-white/95 backdrop-blur-md border-b border-gray-100/50 sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-lg shadow-gray-200/50' : 'shadow-sm'
      }`}>
        {/* Top promotional bar */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 text-center text-sm font-medium">
          <span className="hidden sm:inline">🎉 Free shipping on orders over ₹2000 • Use code: FREESHIP</span>
          <span className="sm:hidden">🎉 Free shipping over ₹2000</span>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-18 items-center justify-between py-3">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center group transition-all duration-300 hover:scale-105"
              style={{ textDecoration: "none" }}
            >
              <div className="relative">
                <img 
                  src={logo} 
                  alt="logo" 
                  className="w-10 h-10 mr-3 transition-transform duration-300 group-hover:rotate-12" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300" />
              </div>
              <div>
                <span className="text-2xl font-black text-transparent bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text tracking-tight">
                  CRONOTIME
                </span>
                <div className="text-xs text-gray-500 font-medium tracking-wider">
                  PREMIUM WATCHES
                </div>
              </div>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 px-6 hidden md:flex items-center max-w-2xl mx-auto">
            <div className={`relative w-full transition-all duration-300 ${
              searchFocused ? 'scale-105' : ''
            }`}>
              <input
                type="search"
                placeholder="Search for luxury watches, brands, collections..."
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className={`w-full rounded-2xl border-2 py-3 pl-5 pr-12 text-sm transition-all duration-300 bg-gray-50/50 backdrop-blur-sm ${
                  searchFocused 
                    ? 'border-blue-400 bg-white shadow-lg ring-4 ring-blue-100' 
                    : 'border-gray-200 hover:border-gray-300'
                } focus:outline-none placeholder-gray-500`}
              />
              <div className={`absolute right-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                searchFocused ? 'text-blue-500' : 'text-gray-400'
              }`}>
                <FiSearch className="h-5 w-5" />
              </div>
              {/* Search suggestions dropdown placeholder */}
              {searchFocused && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 z-10">
                  <div className="text-sm text-gray-500 p-3">
                    Popular searches: Rolex, Omega, Cartier, Swiss watches
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Mobile Search Button */}
            <button
              aria-label="Search"
              className="md:hidden p-3 rounded-2xl hover:bg-gray-100/80 backdrop-blur-sm transition-all duration-300 hover:scale-105"
              onClick={() => {
                const el = document.querySelector('input[type="search"]');
                if (el) el.focus();
              }}
            >
              <FiSearch className="h-5 w-5 text-gray-700" />
            </button>

            {/* Wishlist */}
            <Link
              to="wishlist"
              className="hidden md:flex items-center gap-2 p-3 rounded-2xl hover:bg-gradient-to-r hover:from-pink-50 hover:to-red-50 transition-all duration-300 hover:scale-105 group"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="relative">
                <FiHeart className="h-5 w-5 text-gray-700 group-hover:text-red-500 transition-colors duration-300" />
                <div className="absolute -inset-1 bg-red-400 opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300" />
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-red-600">Wishlist</span>
            </Link>

            {/* Account/User Section */}
            {currentUser ? (
              <div className="relative user-dropdown">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 p-3 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="relative">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">
                        {currentUser.name?.charAt(0).toUpperCase() || 'U'}
                      </span>
                    </div>
                    {isAdmin && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">★</span>
                      </div>
                    )}
                  </div>
                  <div className="hidden sm:block text-left">
                    <div className="text-sm font-medium text-gray-700 group-hover:text-blue-600">
                      {currentUser.name?.split(' ')[0] || 'User'}
                    </div>
                    <div className="text-xs text-gray-500">
                      {isAdmin ? 'Admin' : 'Member'}
                    </div>
                  </div>
                  <FiChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${
                    userDropdownOpen ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* User Dropdown Menu */}
                {userDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">
                            {currentUser.name?.charAt(0).toUpperCase() || 'U'}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{currentUser.name}</div>
                          <div className="text-sm text-gray-500">{currentUser.email}</div>
                        </div>
                      </div>
                    </div>

                    <div className="py-2">
                      {isAdmin && (
                        <Link
                          to="/admin"
                          className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-yellow-50 transition-colors duration-200"
                          onClick={() => setUserDropdownOpen(false)}
                        >
                          <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                            <span className="text-yellow-600">★</span>
                          </div>
                          <div>
                            <div className="font-medium">Admin Dashboard</div>
                            <div className="text-xs text-gray-500">Manage store</div>
                          </div>
                        </Link>
                      )}

                      <Link
                        to="/profile"
                        className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                        onClick={() => setUserDropdownOpen(false)}
                      >
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <FiUser className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium">My Profile</div>
                          <div className="text-xs text-gray-500">Account settings</div>
                        </div>
                      </Link>

                      <Link
                        to="/orders"
                        className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                        onClick={() => setUserDropdownOpen(false)}
                      >
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                          <FiPackage className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                          <div className="font-medium">My Orders</div>
                          <div className="text-xs text-gray-500">Track purchases</div>
                        </div>
                      </Link>

                      <Link
                        to="/settings"
                        className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                        onClick={() => setUserDropdownOpen(false)}
                      >
                        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                          <FiSettings className="w-4 h-4 text-gray-600" />
                        </div>
                        <div>
                          <div className="font-medium">Settings</div>
                          <div className="text-xs text-gray-500">Preferences</div>
                        </div>
                      </Link>

                      <hr className="my-2 border-gray-100" />

                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200 w-full text-left"
                      >
                        <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                          <FiLogOut className="w-4 h-4 text-red-600" />
                        </div>
                        <div>
                          <div className="font-medium">Sign Out</div>
                          <div className="text-xs text-red-400">Logout from account</div>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-2 p-3 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 hover:scale-105 group"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="relative">
                  <FiUser className="h-5 w-5 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
                  <div className="absolute -inset-1 bg-blue-400 opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300" />
                </div>
                <span className="hidden sm:inline-block text-sm font-medium text-gray-700 group-hover:text-blue-600">Sign In</span>
              </Link>
            )}

            {/* Cart */}
            <Link
              to="mycart"
              className="flex items-center gap-2 p-3 rounded-2xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 transition-all duration-300 hover:scale-105 group relative"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="relative">
                <FiShoppingBag className="h-5 w-5 text-gray-700 group-hover:text-purple-600 transition-colors duration-300" />
                {cartLength > 0 && (
                  <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-xs font-bold text-white shadow-lg animate-pulse">
                    {cartLength > 99 ? '99+' : cartLength}
                  </span>
                )}
                <div className="absolute -inset-1 bg-purple-400 opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300" />
              </div>
              <span className="hidden sm:inline-block text-sm font-medium text-gray-700 group-hover:text-purple-600">Cart</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobile}
              className="ml-2 p-3 rounded-2xl text-gray-700 hover:bg-gray-100/80 backdrop-blur-sm md:hidden transition-all duration-300 hover:scale-105"
              aria-expanded={mobileOpen}
            >
              <div className="relative">
                {mobileOpen ? (
                  <FiX className="h-6 w-6 transition-transform duration-300 rotate-90" />
                ) : (
                  <FiMenu className="h-6 w-6 transition-transform duration-300" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            mobileOpen 
              ? "max-h-96 opacity-100 border-t border-gray-100/50" 
              : "max-h-0 opacity-0 overflow-hidden"
          } bg-white/95 backdrop-blur-md`}
          aria-hidden={!mobileOpen}
        >
          <div className="px-4 py-6 space-y-1">
            {/* Mobile Search */}
            <div className="mb-6">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search watches..."
                  className="w-full rounded-2xl border-2 border-gray-200 py-3 pl-5 pr-12 text-sm focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 bg-gray-50/50 transition-all duration-300"
                />
                <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Mobile User Section */}
            {currentUser ? (
              <div className="mb-4 p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">
                      {currentUser.name?.charAt(0).toUpperCase() || 'U'}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{currentUser.name}</div>
                    <div className="text-sm text-gray-500">{isAdmin ? 'Admin Account' : 'Member'}</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  {isAdmin && (
                    <Link
                      to="/admin"
                      className="flex-1 text-center py-2 px-3 bg-yellow-100 text-yellow-700 rounded-lg text-sm font-medium"
                      onClick={() => setMobileOpen(false)}
                    >
                      Admin Panel
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="flex-1 text-center py-2 px-3 bg-red-100 text-red-700 rounded-lg text-sm font-medium"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 group mb-4"
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={() => setMobileOpen(false)}
              >
                <div className="p-2 rounded-xl bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                  <FiUser className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <span className="font-medium text-gray-900">Sign In</span>
                  <div className="text-sm text-gray-500">Access your account</div>
                </div>
              </Link>
            )}

            {/* Mobile Menu Items */}
            <Link
              to="wishlist"
              className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-pink-50 hover:to-red-50 transition-all duration-300 group"
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={() => setMobileOpen(false)}
            >
              <div className="p-2 rounded-xl bg-red-50 group-hover:bg-red-100 transition-colors duration-300">
                <FiHeart className="h-5 w-5 text-red-500" />
              </div>
              <div>
                <span className="font-medium text-gray-900">Wishlist</span>
                <div className="text-sm text-gray-500">Saved items</div>
              </div>
            </Link>

            <Link
              to="mycart"
              className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 transition-all duration-300 group"
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={() => setMobileOpen(false)}
            >
              <div className="relative p-2 rounded-xl bg-purple-50 group-hover:bg-purple-100 transition-colors duration-300">
                <FiShoppingBag className="h-5 w-5 text-purple-500" />
                {cartLength > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-xs font-bold text-white">
                    {cartLength > 9 ? '9+' : cartLength}
                  </span>
                )}
              </div>
              <div>
                <span className="font-medium text-gray-900">Shopping Cart</span>
                <div className="text-sm text-gray-500">
                  {cartLength > 0 ? `${cartLength} items` : 'Empty cart'}
                </div>
              </div>
            </Link>

            {/* Mobile Menu Footer */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-2">Follow us for latest updates</p>
                <div className="flex justify-center gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">f</span>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">ig</span>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">in</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default TopMenu;