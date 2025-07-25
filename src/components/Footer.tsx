import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Sadguru<span className="text-primary">Estate</span>
            </h3>
            <p className="text-sm">
              We are committed to delivering premium residential, commercial, and plot projects across Navi Mumbai. With a focus on quality, transparency, and timely delivery, we help you find the perfect space to live or invest.

            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-primary transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-white mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Nerul, Navi Mumbai</li>
              <li>Phone: 8454057780</li>
              <li>Email: info@Sadguruestate.com</li>
            </ul>

            <div className="mt-4 flex space-x-4">
              {/* Social Icons */}
              <a href="#" className="hover:text-primary transition-colors duration-150">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>

              <a href="#" className="hover:text-primary transition-colors duration-150">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-neutral-700 pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} SadguruEstate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
