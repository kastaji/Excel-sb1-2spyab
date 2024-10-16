import React, { useState } from 'react';
import { Table as TableComponent } from './components/Table';
import { Table as TableIcon } from 'lucide-react';

function App() {
  const [data, setData] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);

  const handleCellChange = (
    rowIndex: number,
    colIndex: number,
    value: string
  ) => {
    const newData = data.map((row, rIndex) =>
      rIndex === rowIndex
        ? row.map((cell, cIndex) => (cIndex === colIndex ? value : cell))
        : row
    );
    setData(newData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl">
        <div className="flex items-center mb-4">
          <TableIcon className="w-8 h-8 text-blue-500 mr-2" />
          <h1 className="text-2xl font-bold text-gray-800">Excel-like Table</h1>
        </div>
        <TableComponent data={data} onCellChange={handleCellChange} />
      </div>
    </div>
  );
}

export default App;
