import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Heart } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="relative">
                <Heart className="h-8 w-8 text-gray-800" />
                <Heart className="h-6 w-6 text-gray-800 absolute -bottom-1 -right-1" />
              </div>
              <div className="ml-2">
                <span className="text-xl font-serif text-gray-900">Zawaj Rishta</span>
                <span className="block text-xs text-gray-600 font-light">Ekteskap bygget på tillit</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <LanguageSelector />
            <Link to="/search" className="text-gray-700 hover:text-gray-900">
              {t('common.findMatches')}
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900">
              {t('common.about')}
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-gray-900">
              {t('common.login')}
            </Link>
            <Link
              to="/register"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700"
            >
              {t('common.registerFree')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/search"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              {t('common.findMatches')}
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              {t('common.about')}
            </Link>
            <Link
              to="/login"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              {t('common.login')}
            </Link>
            <Link
              to="/register"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-800 hover:bg-gray-700"
            >
              {t('common.registerFree')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;