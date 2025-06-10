import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Navi Mumbai property slides
const slides = [
  {
    name: 'Luxury Apartments in Kharghar',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
  },
  {
    name: 'Sea-Facing Homes in Palm Beach Road',
    image: 'https://images.unsplash.com/photo-1505691723518-36a7b3ab7d14',
  },
  {
    name: 'Affordable Flats in Panvel',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994',
  },
  {
    name: 'Premium Towers in Nerul',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
  },
  {
    name: 'Hill View Properties in Taloja',
    image: 'https://images.unsplash.com/photo-1600607686639-2c8db3ba6ed1',
  },
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-neutral-900 text-white overflow-hidden h-[90vh]">
      {/* Background Layer */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/70 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl h-20 overflow-hidden relative">
          {slides.map((slide, index) => (
            <span
              key={index}
              className={`absolute transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {slide.name.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-primary">{slide.name.split(' ').slice(-1)}</span>
            </span>
          ))}
        </h1>

        <p className="mt-12 max-w-3xl text-xl text-neutral-300">
          Discover a wide range of properties for buy. Let us help you find the perfect place to call home.
        </p>

        <div className="mt-10">
          <Link
            to="/contact"
            className="inline-block bg-transparent border-2 border-primary text-primary text-lg font-semibold py-4 px-8 rounded-lg shadow-md hover:bg-primary hover:text-white transition-colors duration-200"
          >
            Contact Agent
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
