import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-white bg-opacity-95 py-6 w-full border-t border-gray-300 shadow-lg mt-8">
      <div className="flex flex-col items-center space-y-2">
        <img src={logo} alt="Woofs n Wags Logo" className="h-8" />
        <p className="text-sm text-center text-gray-800">
          &copy; {new Date().getFullYear()} Woofs n Wags. All rights reserved.
          &nbsp;|&nbsp;
          <a
            href="tel:204-123-4567"
            className="transition-colors hover:text-[#385662]"
          >
            (204) 123-4567
          </a>
          &nbsp;|&nbsp;
          <a
            href="mailto:info@woofsnwags.com"
            className="transition-colors hover:text-[#385662]"
          >
            info@woofsnwags.com
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
