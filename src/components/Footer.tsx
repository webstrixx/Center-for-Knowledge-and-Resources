
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t-2 border-orange-500 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col items-center justify-center text-center gap-3">
        <span className="text-lg font-bold text-orange-600 tracking-wide mb-1">DHRC</span>
        <p className="text-xs text-gray-500">© 2025 Dev Haven Resources Center. All rights reserved.</p>
        <div className="flex gap-4 justify-center mt-1">
          <Link to="/privacy-policy" className="text-xs text-gray-600 hover:text-orange-600 transition">Privacy Policy</Link>
          <span className="text-xs text-gray-300">|</span>
          <Link to="/terms-of-service" className="text-xs text-gray-600 hover:text-orange-600 transition">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
