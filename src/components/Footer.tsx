import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Share2 } from 'lucide-react';
import { config } from '@/data/config';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">CB</span>
              </div>
              <span className="text-xl font-bold">{config.name}</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              {config.description}
            </p>
            <div className="flex space-x-4">
              {config.socialMedia.facebook && (
                <a
                  href={config.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Share2 size={20} />
                </a>
              )}
              {config.socialMedia.instagram && (
                <a
                  href={config.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Share2 size={20} />
                </a>
              )}
              {config.socialMedia.twitter && (
                <a
                  href={config.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Share2 size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/restaurant"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Restaurant
                </Link>
              </li>
              <li>
                <Link
                  to="/bar"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Bar
                </Link>
              </li>
              <li>
                <Link
                  to="/laverie"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Laverie
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-gray-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  {config.address}<br />
                  {config.city}, {config.country}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-gray-400 flex-shrink-0" />
                <a
                  href={`tel:${config.phone}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {config.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-gray-400 flex-shrink-0" />
                <a
                  href={`mailto:${config.email}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {config.email}
                </a>
              </li>
            </ul>

            {/* Hours */}
            {/* <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2">Horaires</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                {Object.entries(config.hours).map(([day, hours]) => (
                  <li key={day} className="flex justify-between">
                    <span className="capitalize">{day}</span>
                    <span>{hours}</span>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} {config.name}. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
