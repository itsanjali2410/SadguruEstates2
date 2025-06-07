import React from 'react';
import { PropertyFilterCriteria, PropertyType } from '../../types';
import { PROPERTY_TYPES_OPTIONS, BEDS_BATHS_OPTIONS, PRICE_RANGE_OPTIONS } from '../../constants';

interface PropertyFilterProps {
  filters: PropertyFilterCriteria;
  onFilterChange: <K extends keyof PropertyFilterCriteria,>(key: K, value: PropertyFilterCriteria[K]) => void;
  onApplyFilters: () => void;
  onResetFilters: () => void;
}

const PropertyFilter: React.FC<PropertyFilterProps> = ({ filters, onFilterChange, onApplyFilters, onResetFilters }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    let processedValue: string | number | PropertyType = value;
    if (name === 'minPrice' || name === 'maxPrice' || name === 'beds' || name === 'baths') {
      processedValue = value === '' ? '' : parseInt(value, 10);
    } else if (name === 'type') {
      processedValue = value as PropertyType;
    }
    onFilterChange(name as keyof PropertyFilterCriteria, processedValue);
  };

  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === '') {
      onFilterChange('minPrice', '');
      onFilterChange('maxPrice', '');
    } else {
      const [min, max] = value.split('-').map(Number);
      onFilterChange('minPrice', min);
      onFilterChange('maxPrice', max);
    }
  };
  
  const getCurrentPriceRangeValue = () => {
    if (filters.minPrice === '' && filters.maxPrice === '') return '';
    return `${filters.minPrice}-${filters.maxPrice}`;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
      <h3 className="text-xl font-semibold text-neutral-800 mb-6">Filter Properties</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        <div>
          <label htmlFor="searchTerm" className="block text-sm font-medium text-neutral-700 mb-1">Search Term</label>
          <input
            type="text"
            name="searchTerm"
            id="searchTerm"
            value={filters.searchTerm || ''}
            onChange={handleInputChange}
            placeholder="e.g. Springfield, Maple St"
            className="w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-neutral-700 mb-1">Property Type</label>
          <select
            name="type"
            id="type"
            value={filters.type || ''}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            {PROPERTY_TYPES_OPTIONS.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="priceRange" className="block text-sm font-medium text-neutral-700 mb-1">Price Range</label>
          <select
            name="priceRange"
            id="priceRange"
            value={getCurrentPriceRangeValue()}
            onChange={handlePriceRangeChange}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            {PRICE_RANGE_OPTIONS.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="beds" className="block text-sm font-medium text-neutral-700 mb-1">Min. Bedrooms</label>
          <select
            name="beds"
            id="beds"
            value={filters.beds || ''}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            {BEDS_BATHS_OPTIONS.map(option => (
              <option key={option.label} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="baths" className="block text-sm font-medium text-neutral-700 mb-1">Min. Bathrooms</label>
          <select
            name="baths"
            id="baths"
            value={filters.baths || ''}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            {BEDS_BATHS_OPTIONS.map(option => (
              <option key={option.label} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-6 flex flex-col sm:flex-row sm:justify-end space-y-2 sm:space-y-0 sm:space-x-3">
        <button
          onClick={onResetFilters}
          className="w-full sm:w-auto px-4 py-2 border border-neutral-300 text-sm font-medium rounded-md text-neutral-700 bg-white hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Reset Filters
        </button>
        <button
          onClick={onApplyFilters}
          className="w-full sm:w-auto px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default PropertyFilter;