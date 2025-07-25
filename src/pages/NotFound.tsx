import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50 px-4">
      <div className="max-w-lg w-full text-center bg-white rounded-2xl shadow-lg p-10 border border-gray-100">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
          alt="404 Not Found Illustration"
          className="w-40 h-40 mx-auto mb-6"
        />
        <h1 className="text-5xl font-extrabold text-orange-600 mb-2">404</h1>
        <p className="text-2xl text-gray-700 mb-4 font-semibold">Oops! Page not found</p>
        <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded mb-6">
          <p className="text-orange-700 text-base font-medium">
            <span className="font-bold">Vibe Craze Note:</span> The page you’re looking for doesn’t exist or has moved.<br />
            If you believe this is an error, please let us know. Meanwhile, explore our resources and keep vibing!
          </p>
        </div>
        <a href="/" className="inline-block mt-2 px-6 py-3 bg-orange-600 text-white font-semibold rounded-full shadow hover:bg-orange-700 transition">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
