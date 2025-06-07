import React from 'react';
import { Property } from '../../types';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl flex flex-col h-full">
      <div className="relative">
        <img className="w-full h-56 object-cover" src={property.imageUrl} alt={property.title} />
        {property.isFeatured && (
           <span className="absolute top-2 left-2 bg-teal-500 text-white px-2 py-1 text-xs font-semibold rounded">Featured</span>
        )}
         <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent w-full p-4">
            <h3 className="text-xl font-semibold text-white truncate">{property.title}</h3>
         </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
            <p className="text-2xl font-bold text-blue-600 mb-2">
            ₹{property.price.toLocaleString()}
            </p>
            <p className="text-neutral-600 text-sm mb-1 truncate">{property.address}, {property.city}</p>
            <p className="text-neutral-700 font-medium text-sm mb-4 capitalize">{property.type}</p>

            <div className="flex items-center space-x-4 text-sm text-neutral-600 mb-4">
            <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1 text-blue-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10.5 11.25h3M12 15V7.5" />
                </svg>
                <span>{property.beds} Beds</span>
            </div>
            <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1 text-blue-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                </svg>
                <span>{property.baths} Baths</span>
            </div>
            <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1 text-blue-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                </svg>
                <span>{property.area.toLocaleString()} sqft</span>
            </div>
            </div>
            <p className="text-neutral-600 text-sm mb-4 h-16 overflow-hidden text-ellipsis">
                {property.description.substring(0, 100)}{property.description.length > 100 ? '...' : ''}
            </p>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-150 text-sm font-medium">
          View Details
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;