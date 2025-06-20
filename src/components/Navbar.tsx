import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="mt-8 mx-8">
      <nav className="bg-blue-300 flex items-center px-8 py-2 w-full rounded-full shadow-md">
        <img src={logo} alt="Logo" className="h-20 mr-8 -my-4" />
        <div className="flex flex-1 justify-between text-white">
          <Link to="/">Home</Link>
          <Link to="/st-annes-location">St. Anne's</Link>
          <Link to="/donald-location">Donald</Link>
          <Link to="/k9-education">K9 Education</Link>
          <Link to="/grooming">Grooming</Link>
          <Link to="/sleep-over-service">Sleep Over</Link>
          <Link to="/the-team">The Team</Link>
          <button className="bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-gray-200">
            It all starts with our Meet n Greet
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
