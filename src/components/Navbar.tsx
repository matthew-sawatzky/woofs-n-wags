import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
import K9EduLogo from "../assets/Woof edu.jpg";
import GroomingLogo from "../assets/Woof tub.jpg";
import WoofsLogo from "../assets/Woofs logo-1.jpeg";

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Determine which logo to show based on current route
  const getCurrentLogo = () => {
    switch (location.pathname) {
      case "/k9-education":
        return K9EduLogo;
      case "/grooming":
        return GroomingLogo;
      case "/sleep-over-service":
        return WoofsLogo;
      default:
        return logo;
    }
  };

  const getCurrentLogoAlt = () => {
    switch (location.pathname) {
      case "/k9-education":
        return "K9 Education Logo";
      case "/grooming":
        return "Grooming Logo";
      case "/sleep-over-service":
        return "Sleep Over Service Logo";
      default:
        return "Logo";
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <div>
        <nav className="flex items-center justify-between px-4 py-0 w-full">
          <Link to="/" onClick={closeMenu}>
            <img
              src={getCurrentLogo()}
              alt={getCurrentLogoAlt()}
              className="h-32 cursor-pointer hover:opacity-90 transition-opacity duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div
            className="hidden xl:flex flex-1 items-center justify-end text-white space-x-8 text-2xl"
            style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}
          >
            <div className="flex items-center space-x-6">
              <Link
                to="/"
                className="hover:shadow-2xl transition-all duration-300 hover:scale-105 px-2 py-1 rounded"
              >
                Home
              </Link>
              <Link
                to="/st-annes-location"
                className="hover:shadow-2xl transition-all duration-300 hover:scale-105 px-2 py-1 rounded"
              >
                St. Anne's
              </Link>
              <Link
                to="/donald-location"
                className="hover:shadow-2xl transition-all duration-300 hover:scale-105 px-2 py-1 rounded"
              >
                Donald
              </Link>
              <Link
                to="/k9-education"
                className="hover:shadow-2xl transition-all duration-300 hover:scale-105 px-2 py-1 rounded"
              >
                K9 Education
              </Link>
              <Link
                to="/grooming"
                className="hover:shadow-2xl transition-all duration-300 hover:scale-105 px-2 py-1 rounded"
              >
                Grooming
              </Link>
              <Link
                to="/sleep-over-service"
                className="hover:shadow-2xl transition-all duration-300 hover:scale-105 px-2 py-1 rounded"
              >
                Sleep Over
              </Link>
              <Link
                to="/the-team"
                className="hover:shadow-2xl transition-all duration-300 hover:scale-105 px-2 py-1 rounded"
              >
                The Team
              </Link>
            </div>
            <a
              href="https://secure.petexec.net/login.php"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white px-4 py-2 rounded-full flex items-center gap-2 hover:opacity-90 hover:shadow-2xl transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: "#385662" }}
            >
              Book Now
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="xl:hidden p-2 rounded-md transition-colors duration-300 relative z-50"
            style={{ color: "white" }}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        <div
          className={`xl:hidden fixed top-0 right-0 h-full w-80 z-50 transition-transform duration-300 ease-in-out bg-white shadow-2xl ${
            isMenuOpen
              ? "transform translate-x-0"
              : "transform translate-x-full"
          }`}
        >
          {/* Close button at top right of menu */}
          <div className="flex justify-end p-4">
            <button
              onClick={closeMenu}
              className="p-2 hover:bg-gray-100 rounded-md transition-colors duration-300"
              style={{ color: "#385662" }}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col px-6 space-y-4">
            <Link
              to="/"
              onClick={closeMenu}
              className="text-xl hover:bg-gray-100 px-3 py-3 rounded transition-all duration-300"
              style={{ color: "#385662" }}
            >
              Home
            </Link>
            <Link
              to="/st-annes-location"
              onClick={closeMenu}
              className="text-xl hover:bg-gray-100 px-3 py-3 rounded transition-all duration-300"
              style={{ color: "#385662" }}
            >
              St. Anne's
            </Link>
            <Link
              to="/donald-location"
              onClick={closeMenu}
              className="text-xl hover:bg-gray-100 px-3 py-3 rounded transition-all duration-300"
              style={{ color: "#385662" }}
            >
              Donald
            </Link>
            <Link
              to="/k9-education"
              onClick={closeMenu}
              className="text-xl hover:bg-gray-100 px-3 py-3 rounded transition-all duration-300"
              style={{ color: "#385662" }}
            >
              K9 Education
            </Link>
            <Link
              to="/grooming"
              onClick={closeMenu}
              className="text-xl hover:bg-gray-100 px-3 py-3 rounded transition-all duration-300"
              style={{ color: "#385662" }}
            >
              Grooming
            </Link>
            <Link
              to="/sleep-over-service"
              onClick={closeMenu}
              className="text-xl hover:bg-gray-100 px-3 py-3 rounded transition-all duration-300"
              style={{ color: "#385662" }}
            >
              Sleep Over
            </Link>
            <Link
              to="/the-team"
              onClick={closeMenu}
              className="text-xl hover:bg-gray-100 px-3 py-3 rounded transition-all duration-300"
              style={{ color: "#385662" }}
            >
              The Team
            </Link>
            <a
              href="https://secure.petexec.net/login.php"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="text-white px-4 py-3 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-300 mt-6"
              style={{ backgroundColor: "#385662" }}
            >
              Book Now
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-gray-200"></div>
    </div>
  );
}

export default Navbar;
