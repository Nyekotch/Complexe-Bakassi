import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { config } from '@/data/config';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Restaurant', path: '/restaurant' },
    { name: 'Bar', path: '/bar' },
    { name: 'Laverie', path: '/laverie' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">CB</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              {config.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-secondary-500 dark:text-secondary-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-secondary-500 dark:hover:text-secondary-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`tel:${config.phone}`}
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-secondary-500"
              aria-label="Appeler"
            >
              <Phone size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.path)
                    ? 'text-secondary-500 dark:text-secondary-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t dark:border-gray-800">
              <a
                href={`tel:${config.phone}`}
                className="flex items-center space-x-2 px-3 py-2 text-gray-600 dark:text-gray-400"
              >
                <Phone size={18} />
                <span>{config.phone}</span>
              </a>
              <div className="flex items-center space-x-2 px-3 py-2 text-gray-600 dark:text-gray-400">
                <MapPin size={18} />
                <span className="text-sm">{config.address}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
