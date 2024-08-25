import React from 'react';
import useSpreadsheet from '../hooks/useSpreadsheet';

const Pagination = () => {
  const { currentPage, setCurrentPage } = useSpreadsheet();

  return (
    <div className="flex justify-center space-x-2 p-2">
      <button 
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-2 py-1 bg-blue-500 text-white rounded disabled:bg-gray-300"
      >
        Previous
      </button>
      <span className="px-2 py-1">Page {currentPage}</span>
      <button 
        onClick={() => setCurrentPage(currentPage + 1)}
        className="px-2 py-1 bg-blue-500 text-white rounded"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;