import React, { useState } from 'react';
import logo from '../image/happinessLogo-removebg-preview.png'

const MobileMenu = () => {
  return (
    <div className="lg:hidden" role="dialog" aria-modal="true">
      <div className="fixed inset-0 z-10"></div>
      <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        {/* Mobile menu content goes here */}
      </div>
    </div>
  );
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src={logo} alt="" />
          </a>


          <label htmlFor="search" className="sr-only">
              Search
            </label>
            <input
              type="text"
              id="search"
              name="search"
              className="bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search"
            />

        </div>
     
        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={toggleMenu}>
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="Home" className="text-sm font-semibold leading-6 text-gray-900">Product</a>
          <a href="Video" className="text-sm font-semibold leading-6 text-gray-900">Features</a>
          <a href="Place" className="text-sm font-semibold leading-6 text-gray-900">Marketplace</a>
          <a href="Summation" className="text-sm font-semibold leading-6 text-gray-900">Company</a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="Profile" className="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
        </div>
      </nav>
      <MobileMenu />
    </header>
  );
};

export default Header;
