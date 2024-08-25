import React from 'react';
import useSpreadsheet from '../hooks/useSpreadsheet';

const Toolbar = () => {
  const { undo, redo } = useSpreadsheet();

  return (
    <div className="flex space-x-2 p-2 bg-gray-100">
      <button 
        onClick={undo} 
        className="px-2 py-1 bg-blue-500 text-white rounded"
      >
        Undo
      </button>
      <button 
        onClick={redo} 
        className="px-2 py-1 bg-blue-500 text-white rounded"
      >
        Redo
      </button>
    </div>
  );
};

export default Toolbar;
