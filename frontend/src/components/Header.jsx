import React, { useState } from 'react';
import logo from '../assets/images/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-transparent p-4">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto">
        <a href="#" className="flex items-center space-x-3">
          <img src={logo} className="h-10" alt="AI Tutor Logo" />
          <span className="text-2xl font-bold text-blue-700">AI Tutor</span>
        </a>

        <div className="hidden md:flex space-x-4">
          <button className="px-7 py-2 border border-blue-500 text-white rounded-lg hover:bg-blue-600 " style={{background:'#543ecb',borderRadius:'100px'}} >
            Parental
          </button>
          <button className="px-7 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600" style={{borderRadius:'100px'}} >
            Sign Up
          </button>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-200"
        >
          <svg className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M3 5h14M3 10h14M3 15h14"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {isMenuOpen && (
          <div className="absolute right-4 top-16 bg-white shadow-lg p-4 rounded-md md:hidden">
            <button className="block w-full px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white">
              Parental
            </button>
            <button className="block w-full mt-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
              Sign Up
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
