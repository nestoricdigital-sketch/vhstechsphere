import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation(); // <- Detect current route

  const links = ["Home", "Services", "Products", "About", "Contact"];

  return (
    <nav className="bg-gray-700 text-white sticky top-0 z-50 shadow-md ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/">
          <div className="flex   justify-center ">
            <p className="text-2xl mr-2  text-center content-center font-bold">
              VH's
            </p>
            <p className="text-xl mt-1 text-center content-center  text-blue-400 ">
              TechSphere
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {links.map((link) => {
            const route = link === "Home" ? "/" : `/${link.toLowerCase()}`;
            const isActive = pathname === route;

            return (
              <Link
                key={link}
                to={route}
                className={`transition-colors duration-300 font-medium 
          ${
            isActive
              ? "text-blue-400 border-b-2  border-blue-400 pb-1"
              : "hover:text-blue-400"
          }
        `}
              >
                {link}
              </Link>
            );
          })}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? (
              // Close icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-2 bg-gradient-to-b from-gray-900 to-gray-200">
          {links.map((link) => {
            const route = link === "Home" ? "/" : `/${link.toLowerCase()}`;
            const isActive = pathname === route;

            return (
              <Link
                key={link}
                to={route}
                className={`transition-colors mt-4 duration-300 font-medium py-2 
            ${
              isActive
                ? "text-blue-400 bg-gray-300 rounded px-2"
                : "hover:text-blue-400"
            }
          `}
                onClick={() => setIsOpen(false)}
              >
                {link}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
