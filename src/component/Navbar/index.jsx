import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const sections = ['home', 'about', 'resume', 'service', 'skills', 'project'];

  const toggleMobileMenu = () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
  };

  const handleLinkClick = () => {
    toggleMobileMenu();
  };

  return (
    <nav
      className={`bg-black fixed w-screen py-2 md:py-4 flex items-center z-40 justify-between px-6 md:px-36`}
    >
      <div className="text-white flex justify-between items-center w-full md:w-auto">
        <Link
          to="/"
          smooth={true}
          duration={500}
          className="text-xl md:text-3xl md:font-extrabold font-semibold flex items-center cursor-pointer"
        >
          PRASANNA
        </Link>
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="hidden md:flex w-[1px] bg-white h-6 ml-4"></div>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-5 text-white tracking-wider font-light">
        {sections.map((section) => (
          <Link
          
            key={section}
            to={section}
            smooth={true}
            duration={500}
            spy={true}
            offset={-80} // Adjust for fixed header
            activeClass="active" // Add 'active' class to the link
            className="group relative w-fit px-4 py-1 text-lg bg-transparent transition-all duration-300 ease-in-out cursor-pointer link-hover"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className="md:hidden absolute top-full left-0 w-full bg-black hidden"
      >
        <div className="flex flex-col space-y-4 text-white tracking-wider font-light px-6 py-4">
          {sections.map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80} // Adjust for fixed header
              activeClass="active" // Add 'active' class to the link
              className="group relative w-fit px-4 py-1 text-lg bg-transparent transition-all duration-300 ease-in-out cursor-pointer link-hover"
              onClick={handleLinkClick}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
