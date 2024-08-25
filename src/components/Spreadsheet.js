// src/components/Spreadsheet.js
import React, { useEffect } from 'react';
import Grid from './Grid';
import Header from './Header';
import Toolbar from './Toolbar';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import useSpreadsheet from '../hooks/useSpreadsheet';
import FormatToolBar from './FormatToolBar';

const Spreadsheet = () => {
  const { initializeCells } = useSpreadsheet();

  useEffect(() => {
    initializeCells();
    console.log('Cells initialized:', useSpreadsheet.getState().cells);
  }, [initializeCells]);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Toolbar />
      <FormatToolBar />
      <SearchBar />
      <Grid />
      <Pagination />
    </div>
  );
};

export default Spreadsheet;