import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto px-4 text-center">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-2 mt-3">
          <Link
            to="/"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            About
          </Link>
          {/* Services link removed to prevent missing module error */}
          <Link
            to="/contact"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mt-3">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            <i className="fab fa-instagram text-lg"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            <i className="fab fa-twitter text-lg"></i>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            <i className="fab fa-github text-lg"></i>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-xs mt-3">
          © {new Date().getFullYear()} Orion. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
