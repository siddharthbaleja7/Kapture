import React from 'react';
import useSpreadsheet from '../hooks/useSpreadsheet';

const FormatToolBar = () => {
  const { formatCell } = useSpreadsheet();

  const handleFormatChange = (property, value) => {
    formatCell(property, value);
  };

  return (
    <div className="p-2 flex space-x-2 items-center">
      <select 
        onChange={(e) => handleFormatChange('fontWeight', e.target.value)} 
        className="bg-blue-600 text-white border border-blue-300 rounded px-2 py-1 text-sm hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150 ease-in-out"
      >
        <option value="normal">Normal</option>
        <option value="bold">Bold</option>
      </select>
      <select 
        onChange={(e) => handleFormatChange('textAlign', e.target.value)}
        className="bg-blue-600 text-white border border-blue-600 rounded px-2 py-1 text-sm hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150 ease-in-out"
      >
        <option value="start">Align Left</option>
        <option value="center">Align Center</option>
        <option value="end">Align Right</option>
      </select>
    </div>
  );
};

export default FormatToolBar;
