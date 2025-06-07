import React, { useState, useEffect, useCallback } from 'react';
import PropertyCard from '../components/PropertyCard';
import PropertyFilter from '../components/PropertyFilter';
import Pagination from '../components/Pagination';
import Spinner from '../components/Spinner';
import { Property, PropertyFilterCriteria, PropertyType } from '../../types';
import { getProperties } from '../../services/propertyService';

const PropertiesPage: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  
  const initialFiltersState: PropertyFilterCriteria = {
    searchTerm: '',
    type: '',
    minPrice: '',
    maxPrice: '',
    beds: '',
    baths: '',
  };
  const [filters, setFilters] = useState<PropertyFilterCriteria>(initialFiltersState);

  const fetchProperties = useCallback(async (page: number, currentFilters: PropertyFilterCriteria) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getProperties(currentFilters, page);
      setProperties(data.properties);
      setTotalPages(data.totalPages);
      setTotalResults(data.totalResults);
      setCurrentPage(page);
    } catch (err) {
      setError('Failed to load properties. Please try again later.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProperties(1, filters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Initial fetch on mount with default filters

  const handleFilterChange = useCallback(<K extends keyof PropertyFilterCriteria,>(
    key: K,
    value: PropertyFilterCriteria[K]
  ) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [key]: value,
    }));
  }, []);

  const handleApplyFilters = () => {
    fetchProperties(1, filters); // Reset to page 1 when filters are applied
  };
  
  const handleResetFilters = () => {
    // Explicitly type initialFilters to satisfy PropertyFilterCriteria requirements
    const initialFilters: PropertyFilterCriteria = { 
        searchTerm: '', 
        type: '' as PropertyType | '', // Ensure type is PropertyType | ''
        minPrice: '', 
        maxPrice: '', 
        beds: '', 
        baths: '' 
    };
    setFilters(initialFilters);
    fetchProperties(1, initialFilters);
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      fetchProperties(page, filters);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="bg-neutral-100 min-h-screen">
      <div className="bg-neutral-800 text-white py-12 mb-8 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center">Find Your Perfect Property</h1>
            <p className="text-center text-neutral-300 mt-2">Browse our extensive list of available properties.</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <PropertyFilter 
            filters={filters} 
            onFilterChange={handleFilterChange} 
            onApplyFilters={handleApplyFilters}
            onResetFilters={handleResetFilters}
        />

        {isLoading ? (
          <Spinner />
        ) : error ? (
          <p className="text-center text-red-500 py-8">{error}</p>
        ) : properties.length > 0 ? (
          <>
            <div className="mb-6 text-sm text-neutral-600">
                Showing {properties.length} of {totalResults} results.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        ) : (
          <p className="text-center text-neutral-600 py-8 text-xl">
            No properties found matching your criteria. Try adjusting your filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default PropertiesPage;