import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <div className="relative">
                <Heart className="h-8 w-8 text-gray-200" />
                <Heart className="h-6 w-6 text-gray-200 absolute -bottom-1 -right-1" />
              </div>
              <div className="ml-2">
                <span className="text-xl font-serif text-white">Zawaj Rishta</span>
                <span className="block text-xs text-gray-400 font-light">Ekteskap bygget på tillit</span>
              </div>
            </Link>
            <p className="mt-4 text-gray-400">
              Finding your life partner the halal way
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/about" className="text-base text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-base text-gray-300 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-base text-gray-300 hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Support
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/help" className="text-base text-gray-300 hover:text-white">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/safety" className="text-base text-gray-300 hover:text-white">
                  Safety Center
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-base text-gray-300 hover:text-white">
                  Community Guidelines
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="mailto:support@zawajrishta.com" className="text-base text-gray-300 hover:text-white flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  support@zawajrishta.com
                </a>
              </li>
              <li>
                <a href="tel:+4712345678" className="text-base text-gray-300 hover:text-white flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  +47 123 45 678
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} Zawaj Rishta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;