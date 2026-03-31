import React from 'react';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar-shadow bg-white sticky top-0 z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="font-display text-2xl font-semibold text-indigo-900">
            <span className="text-purple-600">DigiTools</span>
          </span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">Home</a>
          <a href="#products" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">Products</a>
          <a href="#pricing" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">Pricing</a>
          <a href="#steps" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">How It Works</a>
        </div>

        {/* Cart + CTA */}
        <div className="flex items-center gap-4">
          <a href="#products" className="relative cursor-pointer">
            <div className="relative p-2 hover:bg-purple-50 rounded-full transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </div>
          </a>
          <a href="#home" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">Login</a>
          <button className="btn-primary px-5 py-2 rounded-full text-sm font-semibold hidden md:block">
            Get Started
          </button>
          {/* Mobile menu */}
          <div className="dropdown dropdown-end md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#steps">How It Works</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
