import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import logo from '/logo.webp';

const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((open) => !open);

  return (
    <header className="bg-black fixed top-0 left-0 w-full shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center" aria-label="Main">
        {/* Logo */}
        <Link to="/" onClick={() => setIsOpen(false)} aria-label="Antiqa Jalilova - home">
          <img src={logo} alt="Antiqa Jalilova logo" width="124" height="64" className="w-auto max-h-16" />
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden text-yellow-400 text-2xl p-2"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="main-menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation links */}
        <ul
          id="main-menu"
          className={`md:flex md:items-center md:space-x-8 absolute md:static text-white bg-black right-0 md:right-auto w-64 md:w-auto px-4 md:px-2 transition-all duration-300 ease-in-out ${
            isOpen ? 'top-20 visible' : 'top-[-500px] invisible md:visible'
          }`}
        >
          {menuItems.map(({ name, path }) => (
            <li key={path} className="py-2 md:py-0 text-center md:text-left">
              <NavLink
                to={path}
                end
                onClick={() => setIsOpen(false)}
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
      </nav>
    </header>
  );
};

export default Navbar;
