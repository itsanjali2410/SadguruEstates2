import React from 'react';

const Spinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center my-8">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
    </div>
  );
};

export default Spinner;