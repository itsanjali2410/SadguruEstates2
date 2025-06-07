import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const pageNumbers = [];
  const maxPagesToShow = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  if (endPage - startPage + 1 < maxPagesToShow) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }
  
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex items-center justify-center mt-8" aria-label="Pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-neutral-300 bg-white text-sm font-medium text-neutral-500 hover:bg-neutral-50 disabled:opacity-50"
      >
        <span className="sr-only">Previous</span>
        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </button>

      {startPage > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className="relative inline-flex items-center px-4 py-2 border-y border-neutral-300 bg-white text-sm font-medium text-neutral-700 hover:bg-neutral-50"
          >
            1
          </button>
          {startPage > 2 && <span className="relative inline-flex items-center px-4 py-2 border-y border-neutral-300 bg-white text-sm font-medium text-neutral-700">...</span>}
        </>
      )}

      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          aria-current={currentPage === number ? 'page' : undefined}
          className={`relative inline-flex items-center px-4 py-2 border-y border-r border-neutral-300 text-sm font-medium 
            ${currentPage === number ? 'z-10 bg-blue-600 border-blue-600 text-white' : 'bg-white text-neutral-700 hover:bg-neutral-50'}`}
        >
          {number}
        </button>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages -1 && <span className="relative inline-flex items-center px-4 py-2 border-y border-r border-neutral-300 bg-white text-sm font-medium text-neutral-700">...</span>}
          <button
            onClick={() => onPageChange(totalPages)}
            className="relative inline-flex items-center px-4 py-2 border-y border-r border-neutral-300 bg-white text-sm font-medium text-neutral-700 hover:bg-neutral-50"
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-neutral-300 bg-white text-sm font-medium text-neutral-500 hover:bg-neutral-50 disabled:opacity-50"
      >
        <span className="sr-only">Next</span>
        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </button>
    </nav>
  );
};

export default Pagination;