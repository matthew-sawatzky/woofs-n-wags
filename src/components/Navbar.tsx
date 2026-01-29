import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div>
      <div>
        <nav className="flex items-center px-4 py-0 w-full">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-32 mr-4 cursor-pointer hover:opacity-90 transition-opacity duration-300"
            />
          </Link>
          <div className="flex flex-1 items-center justify-end text-white space-x-8 text-2xl">
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
