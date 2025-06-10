import React, { useState } from 'react';
import { Link, NavLink as RouterNavLink } from 'react-router-dom';
import { NAV_LINKS } from '../../constants';
import type { NavLink } from '../../types';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 text-white flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-secondary mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3.75h.162c.304 0 .583.124.796.336M18.75 3.75V1.5c0-.552-.448-1-1-1h-1.5a1 1 0 00-1 1v1.5m1.5 0v2.25m0 0C16.822 7.125 15.178 7.5 13.5 7.5S10.178 7.125 8.25 6M2.25 9V3.545m0 0A2.25 2.25 0 014.5 2.25h1.5V1.5c0-.552.448-1 1-1h1.5a1 1 0 011 1v1.5m0 0V6.75m0 0c1.682.375 3.322.75 5.25.75s3.568-.375 5.25-.75M2.25 9v9.75M16.5 2.25H12M12 2.25H7.5" />
              </svg>
              <span className="font-bold text-2xl tracking-tight text-white">
                Sadguru<span className="text-secondary">Estate</span>
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {NAV_LINKS.map((link: NavLink) => (
                <RouterNavLink
                  key={link.label}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out ${
                      isActive
                        ? 'bg-secondary text-white'
                        : 'text-white/80 hover:bg-primary-hover hover:text-white'
                    }`
                  }
                >
                  {link.label}
                </RouterNavLink>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-primary-hover inline-flex items-center justify-center p-2 rounded-md text-white/80 hover:text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-secondary"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link: NavLink) => (
              <RouterNavLink
                key={link.label}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-150 ease-in-out ${
                    isActive
                      ? 'bg-secondary text-white'
                      : 'text-white/80 hover:bg-primary-hover hover:text-white'
                  }`
                }
              >
                {link.label}
              </RouterNavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
