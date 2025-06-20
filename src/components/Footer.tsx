import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="py-4 w-full fixed bottom-0 left-0">
      <div className="flex flex-col items-center space-y-2">
        <img src={logo} alt="Woofs n Wags Logo" className="h-8" />
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} Woofs n Wags. All rights reserved. &nbsp;|&nbsp;
          (204) 123-4567 &nbsp;|&nbsp; info@woofsnwags.com
        </p>
      </div>
    </footer>
  );
}

export default Footer;
