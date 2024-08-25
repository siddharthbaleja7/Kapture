import React from 'react';
import Cell from './Cell';
import useSpreadsheet from '../hooks/useSpreadsheet';

const Grid = () => {
  const { cells, searchTerm, currentPage, itemsPerPage } = useSpreadsheet();
  
  // Filter cells based on the search term
  const filteredCells = Object.entries(cells).filter(([id, cell]) => {
    const cellValue = cell.value || ''; // Ensure cellValue is a string
    return cellValue.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // Calculate the start and end index for pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Extract the current page cells
  const currentCells = filteredCells.slice(startIndex, endIndex);

  return (
    <div className="grid grid-cols-10 gap-1 p-2 w-full h-full">
      {currentCells.map(([id, cell]) => (
        <div key={id} className="col-span-1 row-span-1 w-full h-full flex items-center justify-center border">
          <Cell id={id} {...cell} />
        </div>
      ))}
    </div>
  );
};

export default Grid;
