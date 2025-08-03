import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setSearch } from "../redux/slices/SearchSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md border-b border-gray-200">
      <div className="flex flex-col lg:flex-row items-center justify-between px-4 py-3 max-w-7xl mx-auto">

        {/* Brand */}
        <div className="text-center lg:text-left mb-2 lg:mb-0">
          <h3 className="text-sm text-gray-600 font-semibold">
            {new Date().toUTCString().slice(0, 16)}
          </h3>
          <Link to="/">
            <h1 className="text-xl font-bold text-gray-800 hover:text-indigo-600 transition">
              Flavoro Foods
            </h1>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="w-full lg:w-1/2 my-2 lg:my-0">
          <input
            type="search"
            placeholder="Search here"
            autoComplete="off"
            onChange={(e) => dispatch(setSearch(e.target.value))}
            className="w-full px-4 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Links: Home | Login | Signup */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-sm text-gray-700 hover:text-indigo-600 font-medium transition">
            Home
          </Link>

          

          <Link to="/login">
            <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition">
              Login
            </button>
          </Link>

          <Link to="/signup">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
              Signup
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
