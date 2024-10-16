import React from 'react'

interface TableProps {
  data: string[][]
  onCellChange: (rowIndex: number, colIndex: number, value: string) => void
}

export const Table: React.FC<TableProps> = ({ data, onCellChange }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex} className="border border-gray-300 p-1">
                  <input
                    type="text"
                    value={cell}
                    onChange={(e) => onCellChange(rowIndex, colIndex, e.target.value)}
                    className="w-full h-full focus:outline-none focus:ring-2 focus:ring-blue-500 px-2 py-1"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}