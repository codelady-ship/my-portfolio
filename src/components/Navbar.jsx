import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import logo from '/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-black fixed top-0 left-0 w-full shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" className="w-auto max-h-16" />
        </div>

        {/* Mobile menu icon */}
        <div
          className="md:hidden text-yellow-400 text-2xl cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </div>

        {/* Navigation links */}
        <ul
          className={`md:flex md:items-center md:space-x-8 absolute md:static text-white bg-black right-0 md:right-auto w-64 md:w-auto px-4 md:px-2 transition-all duration-300 ease-in-out ${
            isOpen ? 'top-20' : 'top-[-500px]'
          }`}
        >
          {menuItems.map(({ name, path }, idx) => (
            <li key={idx} className="py-2 md:py-0 text-center md:text-left">
              <NavLink
                to={path}
                onClick={() => setIsOpen(false)} // Menu açıq qalmasın deyə
                className={({ isActive }) =>
                  `relative transition duration-300 block after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-yellow-600 hover:after:w-full after:transition-all after:duration-300 ${
                    isActive ? 'font-semibold text-yellow-500' : 'hover:font-semibold'
                  }`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
