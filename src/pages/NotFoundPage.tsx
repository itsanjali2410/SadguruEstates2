import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center bg-neutral-100 text-center px-4">
      <div className="max-w-md">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-32 h-32 text-blue-600 mx-auto mb-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
        </svg>
        <h1 className="text-6xl font-extrabold text-neutral-800 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-neutral-700 mb-6">Page Not Found</h2>
        <p className="text-neutral-600 mb-8">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;