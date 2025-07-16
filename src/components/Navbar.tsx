import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="mt-8 mx-8">
      <nav className="flex items-center px-8 py-4 w-full">
        <img src={logo} alt="Logo" className="h-20 mr-8" />
        <div className="flex flex-1 items-center justify-between text-white">
          <div className="flex items-center space-x-6">
            <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <div className="w-px h-4 bg-white opacity-50"></div>
            <Link to="/st-annes-location" className="hover:text-gray-300 transition-colors">St. Anne's</Link>
            <div className="w-px h-4 bg-white opacity-50"></div>
            <Link to="/donald-location" className="hover:text-gray-300 transition-colors">Donald</Link>
            <div className="w-px h-4 bg-white opacity-50"></div>
            <Link to="/k9-education" className="hover:text-gray-300 transition-colors">K9 Education</Link>
            <div className="w-px h-4 bg-white opacity-50"></div>
            <Link to="/grooming" className="hover:text-gray-300 transition-colors">Grooming</Link>
            <div className="w-px h-4 bg-white opacity-50"></div>
            <Link to="/sleep-over-service" className="hover:text-gray-300 transition-colors">Sleep Over</Link>
            <div className="w-px h-4 bg-white opacity-50"></div>
            <Link to="/the-team" className="hover:text-gray-300 transition-colors">The Team</Link>
          </div>
          <button className="bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors ml-8">
            It all starts with our Meet n Greet
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
