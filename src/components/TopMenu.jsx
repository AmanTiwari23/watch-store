import React, { useState } from "react";
import {
  FiSearch,
  FiUser,
  FiShoppingBag,
  FiHeart,
  FiMenu,
  FiX,
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
  const toggleMobile = () => setMobileOpen((s) => !s);

  return (
    <>
      <header className="w-full bg-white shadow-black shadow gap-2  sticky top-0 z-10">
        <div className="mx-auto max-w-full px-4 sm:px-4 lg:px-6 flex h-16 items-center justify-between">
          <div className="flex justify-center items-center">
            <Link
              to="/"
              className="flex justify-center items-center"
              style={{ textDecoration: "none" }}
            >
              <img src={logo} alt="logo" className="w-8 mr-1.5" />{" "}
              <span className="text-xl font-bold text-gray-800">CRONOTIME</span>
            </Link>
          </div>

          <div className="flex-1 px-4 hidden md:flex items-center max-w-xl mx-auto">
            <label className="relative w-full">
              <input
                type="search"
                placeholder="Search for products, collections, models..."
                className="w-full rounded-full border border-gray-200 py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
              />
              <FiSearch className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            </label>
          </div>

          <div className="flex items-center gap-3">
            <button
              aria-label="Search (mobile)"
              className="md:hidden p-2 rounded-full hover:bg-gray-100"
              onClick={() => {
                const el = document.querySelector('input[type="search"]');
                if (el) el.focus();
              }}
            >
              <FiSearch className="h-5 w-5 text-gray-700" />
            </button>

            <Link
              to="wishlist"
              className="hidden md:inline-flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 "
              style={{ textDecoration: "none", color: "black" }}
            >
              <FiHeart className="h-5 w-5" />
              <span className="text-sm">Wishlist</span>
            </Link>

            <Link
              to="register"
              className="inline-flex items-center gap-2 p-2 rounded-full hover:bg-gray-100"
              style={{ textDecoration: "none", color: "black" }}
            >
              <FiUser className="h-5 w-5" />
              <span className="hidden sm:inline-block text-sm">Account</span>
            </Link>

            <Link
              to="mycart"
              className="inline-flex items-center gap-2 p-2 rounded-full hover:bg-gray-100"
              style={{ textDecoration: "none", color: "black" }}
            >
              <span className="relative inline-block" >
                <FiShoppingBag className="h-5 w-5" />{" "}
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                  {cartLength}
                </span>
              </span>

              <span className="hidden sm:inline-block text-sm">Cart</span>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobile}
              className="ml-1 inline-flex items-center rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        <div
          className={`md:hidden ${
            mobileOpen ? "block" : "hidden"
          } border-t border-gray-100 bg-white`}
          aria-hidden={!mobileOpen}
        >
          <div className="space-y-2 px-4 py-4">
            <div className="mt-2 border-t border-gray-100 pt-3">
              <Link
                to="wishlist"
                className="hidden md:inline-flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 "
                style={{ textDecoration: "none", color: "black" }}
              >
                <FiHeart className="h-5 w-5" />
                <span className="text-sm">Wishlist</span>
              </Link>

              <Link
                to="register"
                className="inline-flex items-center gap-2 p-2 rounded-full hover:bg-gray-100"
                style={{ textDecoration: "none", color: "black" }}
              >
                <FiUser className="h-5 w-5" />
                <span className="hidden sm:inline-block text-sm">Account</span>
              </Link>

              <Link
                to="cart"
                className="inline-flex items-center gap-2 p-2 rounded-full hover:bg-gray-100"
                style={{ textDecoration: "none", color: "black" }}
              >
                <FiShoppingBag className="h-5 w-5" />
                <span className="hidden sm:inline-block text-sm">Cart</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default TopMenu;
