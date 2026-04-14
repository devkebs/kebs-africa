import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-white">
              Kebs Africa
            </a>
            <p className="text-gray-400 mt-2">
              Creating amazing digital experiences
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/SwiftCodes01"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="mailto:lawalquadri507@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Email
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Kebs Africa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
