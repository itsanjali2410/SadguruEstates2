import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-neutral-800 text-white overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://picsum.photos/seed/hero-bg/1920/1080" 
          alt="Luxury Sadguru home" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/70 to-transparent"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          Find Your Dream <span className="text-blue-600">Property</span>
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-neutral-300">
          Discover a wide range of properties for sale and rent. Let us help you find the perfect place to call home.
        </p>
        <div className="mt-10">
          <Link
            to="/properties"
            className="inline-block bg-blue-600 text-white text-lg font-semibold py-4 px-8 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200"
          >
            Explore Properties
          </Link>
          <Link
            to="/contact"
            className="ml-4 inline-block bg-transparent border-2 border-blue-600 text-blue-600 text-lg font-semibold py-4 px-8 rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition-colors duration-200"
          >
            Contact Agent
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;