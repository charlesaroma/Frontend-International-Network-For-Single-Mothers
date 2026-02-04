import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-cream text-brand-dark">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between items-start">
          {/* Left Section: Logo and Description */}
          <div className="w-full md:w-1/2 lg:w-1/3 mb-6 md:mb-0">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo.png" 
                alt="INSM Uganda Logo" 
                className="h-16 w-16 object-contain"
              />
            </div>
            <h3 className="font-semibold text-lg mb-2">
              International Network for Single Mothers<br />
              Uganda Chapter
            </h3>
            <p className="text-sm leading-relaxed max-w-md">
              We empower mothers become an economic force in Uganda. We are committed to radical transparency 
              and the economic dignity of every home.
            </p>
          </div>

          {/* Right Section: Navigation Links */}
          <div className="w-full md:w-1/2 lg:w-1/3 mb-6 md:mb-0">
            <ul className="text-lg font-semibold space-y-2">
              <li>
                <Link 
                  to="/about" 
                  className="hover:text-brand-teal transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="hover:text-brand-teal transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/give" 
                  className="hover:text-brand-teal transition-colors"
                >
                  Ways to Give
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy" 
                  className="hover:text-brand-teal transition-colors"
                >
                  Privacy Policy & Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Contact and Copyright */}
        <div className="border-t border-brand-dark-200 mt-8 pt-6">
          <div className="text-sm text-center space-y-2">
            <p>
              If you need assistance with your donation, please call us at{' '}
              <a href="tel:000000000" className="text-brand-teal hover:underline font-medium">
                000000000
              </a>
              {' '}or contact us through our{' '}
              <a href="mailto:official@insmuganda.org" className="text-brand-teal hover:underline font-medium">
                official email
              </a>
              .
            </p>
            <p>
              International Network for Single Mothers Uganda Chapter is a not-for-profit organization. 
              © 2026 INSM Uganda. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
