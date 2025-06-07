
import React from 'react';

interface AlertProps {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  onClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({ type, message, onClose }) => {
  const baseClasses = "p-4 mb-4 text-sm rounded-lg";
  let specificClasses = "";

  switch (type) {
    case 'success':
      specificClasses = "bg-green-100 text-green-700 dark:bg-green-200 dark:text-green-800";
      break;
    case 'error':
      specificClasses = "bg-red-100 text-red-700 dark:bg-red-200 dark:text-red-800";
      break;
    case 'warning':
      specificClasses = "bg-yellow-100 text-yellow-700 dark:bg-yellow-200 dark:text-yellow-800";
      break;
    case 'info':
    default:
      specificClasses = "bg-blue-100 text-blue-700 dark:bg-blue-200 dark:text-blue-800";
      break;
  }

  return (
    <div className={`${baseClasses} ${specificClasses} flex justify-between items-center`} role="alert">
      <span className="font-medium">{message}</span>
      {onClose && (
        <button 
          type="button" 
          className="ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex h-8 w-8"
          onClick={onClose}
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </button>
      )}
    </div>
  );
};

export default Alert;
