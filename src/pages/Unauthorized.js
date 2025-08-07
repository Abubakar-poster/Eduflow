import React from "react";
import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
        <div className="text-6xl mb-4">🔒</div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Unauthorized Access
        </h1>
        <p className="text-gray-600 mb-6">
          You don't have permission to access this page with your current role.
        </p>
        <Link
          to="/"
          className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-md transition-all"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default Unauthorized;
