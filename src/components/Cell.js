import React, { useState } from 'react';
import useSpreadsheet from '../hooks/useSpreadsheet';

const Cell = ({ id, value, format }) => {
  const [editing, setEditing] = useState(false);
  const { updateCell, selectCell } = useSpreadsheet();

  const handleChange = (e) => {
    updateCell(id, e.target.value);
  };

  const cellStyle = {
    // textAlign: format?.textAlign || 'left',
    justifyContent: format?.textAlign || 'start',
    fontSize: format?.fontSize || '14px',
    fontWeight: format?.fontWeight || 'normal',
    border: '1px solid black',
    padding: '4px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    height: '100%',
    width: '100%',
  };

  return (
    <div
      onClick={() => {
        setEditing(true);
        selectCell(id);
      }}
      className="w-full h-full flex items-center"
      style={cellStyle}
    >
      {editing ? (
        <input
          type="text"
          value={value || ''}
          onChange={handleChange}
          onBlur={() => setEditing(false)}
          className="w-full h-full"
          autoFocus
        />
      ) : (
        value || ''
      )}
    </div>
  );
};

export default React.memo(Cell);
