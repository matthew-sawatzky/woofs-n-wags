import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-white bg-opacity-95 py-6 w-full border-t border-gray-300 shadow-lg mt-8">
      <div className="flex flex-col items-center space-y-2">
        <img src={logo} alt="Woofs n Wags Logo" className="h-8" />
        <p className="text-sm text-center text-gray-800">
          &copy; {new Date().getFullYear()} Woofs n Wags. All rights reserved.
          &nbsp;|&nbsp; (204) 123-4567 &nbsp;|&nbsp; info@woofsnwags.com
        </p>
      </div>
    </footer>
  );
}

export default Footer;
