import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import K9EduLogo from "../assets/Woof edu.jpg";
import GroomingLogo from "../assets/Woof tub.jpg";
import WoofsLogo from "../assets/Woofs logo-1.jpeg";

function Navbar() {
  const location = useLocation();

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
  return (
    <div>
      <div>
        <nav className="flex items-center px-4 py-0 w-full">
          <Link to="/">
            <img
              src={getCurrentLogo()}
              alt={getCurrentLogoAlt()}
              className="h-32 mr-4 cursor-pointer hover:opacity-90 transition-opacity duration-300"
            />
          </Link>
          <div
            className="flex flex-1 items-center justify-end text-white space-x-8 text-2xl"
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
        </nav>
      </div>
      <div className="w-full h-px bg-gray-200"></div>
    </div>
  );
}

export default Navbar;
