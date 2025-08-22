import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div>
      <div className="mx-8">
        <nav className="flex items-center px-8 py-4 w-full">
          <img src={logo} alt="Logo" className="h-20 mr-8" />
          <div className="flex flex-1 items-center justify-end text-white space-x-8">
            <div className="flex items-center space-x-6">
              <Link to="/">Home</Link>
              <Link to="/st-annes-location">St. Anne's</Link>
              <Link to="/donald-location">Donald</Link>
              <Link to="/k9-education">K9 Education</Link>
              <Link to="/grooming">Grooming</Link>
              <Link to="/sleep-over-service">Sleep Over</Link>
              <Link to="/the-team">The Team</Link>
            </div>
            <a
              href="https://secure.petexec.net/login.php"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white px-4 py-2 rounded-full flex items-center gap-2 hover:opacity-90 transition-colors"
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
