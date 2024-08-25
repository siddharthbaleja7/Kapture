import { create } from 'zustand';

const useSpreadsheet = create((set) => ({
  cells: {},
  history: [],
  historyIndex: -1,
  searchTerm: '',
  currentPage: 1,
  itemsPerPage: 50,
  columnRules: {}, // Add columnRules state

  validateCell: (id, value) => {
    set((state) => {
      const cell = state.cells[id];
      const column = id.split('-')[0]; // Assume cell IDs are in format `column-row`
      const rule = state.columnRules[column];

      if (rule) {
        if (rule === 'numeric' && isNaN(value)) {
          return { cells: { ...state.cells, [id]: { ...cell, error: 'Must be a number' } } };
        }
        // Add more validation rules as needed
      }
      return { cells: { ...state.cells, [id]: { ...cell, error: '' } } };
    });
  },

  updateCell: (id, value) => {
    set((state) => {
      const newCells = { ...state.cells, [id]: { ...state.cells[id], value } };
      const newHistory = [...state.history.slice(0, state.historyIndex + 1), newCells];
      return { 
        cells: newCells, 
        history: newHistory, 
        historyIndex: state.historyIndex + 1 
      };
    });
    // Validation should be handled in `validateCell` call from `Cell` component
  },

  undo: () => {
    set((state) => {
      if (state.historyIndex > 0) {
        return { 
          cells: state.history[state.historyIndex - 1], 
          historyIndex: state.historyIndex - 1 
        };
      }
      return state;
    });
  },

  redo: () => {
    set((state) => {
      if (state.historyIndex < state.history.length - 1) {
        return { 
          cells: state.history[state.historyIndex + 1], 
          historyIndex: state.historyIndex + 1 
        };
      }
      return state;
    });
  },

  setSearchTerm: (term) => set({ searchTerm: term }),

  setCurrentPage: (page) => set({ currentPage: page }),

  formatCell: (property, value) => {
    set((state) => {
      const newCells = { ...state.cells };
      Object.keys(newCells).forEach(cellId => {
        newCells[cellId] = {
          ...newCells[cellId],
          format: { ...newCells[cellId].format, [property]: value }
        };
      });
      return { cells: newCells };
    });
  },

  initializeCells: () => {
    const initialCells = {};
    for (let i = 0; i < 1000; i++) {
      initialCells[`cell-${i}`] = { value: '', format: {}, selected: false }; // Added selected state
    }
    set({ cells: initialCells });
  },

  selectCell: (id) => {
    set((state) => {
      const newCells = { ...state.cells };
      newCells[id] = { ...newCells[id], selected: !newCells[id].selected };
      return { cells: newCells };
    });
  },

  setColumnRule: (column, rule) => {
    set((state) => ({
      columnRules: { ...state.columnRules, [column]: rule }
    }));
  }
}));

export default useSpreadsheet;
