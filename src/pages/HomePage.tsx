import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import PropertyCard from '../components/PropertyCard';
import Spinner from '../components/Spinner';
import { Property } from '../../types';
import { getFeaturedProperties } from '../../services/propertyService';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const [featuredProperties, setFeaturedProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const properties = await getFeaturedProperties(3);
        setFeaturedProperties(properties);
      } catch (err) {
        setError('Failed to load featured properties.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFeatured();
  }, []);

  return (
    <div>
      <Hero />
      <section className="py-16 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-neutral-900 text-center mb-12">
            Featured Properties
          </h2>
          {isLoading && <Spinner />}
          {error && <p className="text-center text-red-500">{error}</p>}
          {!isLoading && !error && featuredProperties.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProperties.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}
          {!isLoading && !error && featuredProperties.length === 0 && (
            <p className="text-center text-neutral-600">No featured properties available at the moment.</p>
          )}
           <div className="text-center mt-12">
            <Link 
              to="/properties" 
              className="inline-block bg-teal-500 text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-teal-600 transition-colors duration-200"
            >
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-neutral-900 mb-6">Why Choose Us?</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto mb-12">
                We are dedicated to providing you with the best real estate experience. Our team of experts is here to guide you every step of the way.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6">
                    <div className="flex justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-blue-600">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.82.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.82-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-800 mb-2">Expert Agents</h3>
                    <p className="text-neutral-600">Our knowledgeable agents provide personalized service and market expertise.</p>
                </div>
                <div className="p-6">
                    <div className="flex justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-blue-600">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-800 mb-2">Wide Selection</h3>
                    <p className="text-neutral-600">Access a diverse portfolio of properties to match your unique needs.</p>
                </div>
                <div className="p-6">
                     <div className="flex justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-blue-600">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-800 mb-2">Trusted & Secure</h3>
                    <p className="text-neutral-600">We prioritize your security and trust throughout the entire process.</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;