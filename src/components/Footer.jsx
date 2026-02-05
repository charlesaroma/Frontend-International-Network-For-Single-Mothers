import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-cream-100 w-full py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-64 mb-16">
          
          {/* LEFT: Logo + Description */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 max-w-xl">
            <div className="shrink-0 bg-white rounded-full p-1 shadow-sm">
               <img 
                 src="/logo.png" 
                 alt="INSM Uganda Logo"
                 className="w-54 h-54 object-contain rounded-full"
               />
            </div>
            <div className="text-center md:text-left pt-2">
              <p className="font-secondary font-semibold text-brand-cream-800 text-lg leading-relaxed">
                International Network for <br/> Single Mothers Uganda Chapter <br/> empowers mothers become an <br/> economic force in Uganda.<br/> We are committed to radical <br/> transparency and the economic <br/> dignity of every home.
              </p>
            </div>
          </div>

          {/* RIGHT: Navigation Links */}
          <div className="flex flex-col space-y-4 pt-2 items-center md:items-start w-full md:w-auto">
            <Link to="/about" className="font-primary font-bold text-xl text-brand-teal-700 hover:text-brand-teal-900 transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="font-primary font-bold text-xl text-brand-teal-700 hover:text-brand-teal-900 transition-colors">
              Contact Us
            </Link>
            <Link to="/give" className="font-primary font-bold text-xl text-brand-teal-700 hover:text-brand-teal-900 transition-colors">
              Ways to Give
            </Link>
            <Link to="/privacy" className="font-primary font-bold text-xl text-brand-teal-700 hover:text-brand-teal-900 transition-colors">
              Privacy Policy & <br/> Terms of Use
            </Link>
          </div>
        </div>

        {/* BOTTOM: Contact & Copyright */}
        <div className="flex flex-col items-start gap-1 text-base text-brand-cream-800 font-semibold font-secondary max-w-3xl">
          <p>
            If you need assistance with your donation, please call us at 000000000 or <br/> contact us through our{' '}
            <a href="mailto:official@insmuganda.org" className="text-brand-lilac-700 border-b border-brand-lilac-700 hover:text-brand-lilac-900 transition-colors">
              official email
            </a>.
          </p>
          <p>
            International Network for Single Mothers Uganda Chapter is a not-for-profit <br/> organization. © 2026 INSM Uganda. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
