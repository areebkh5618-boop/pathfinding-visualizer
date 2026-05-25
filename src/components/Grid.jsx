import React, { useState, useEffect } from 'react';
import { bfs } from '../algorithms/bfs';
import { dfs } from '../algorithms/dfs';
import { dijkstra } from '../algorithms/dijkstra';
import { astar } from '../algorithms/astar';

const Grid = ({ gridSize, algorithm, isRunning }) => {
  const [grid, setGrid] = useState([]);
  const [startPos, setStartPos] = useState(null);
  const [endPos, setEndPos] = useState(null);
  const [visitedCells, setVisitedCells] = useState(new Set());
  const [pathCells, setPathCells] = useState([]);

  // Initialize grid
  useEffect(() => {
    const newGrid = Array(gridSize).fill(null).map(() => Array(gridSize).fill(0));
    setGrid(newGrid);
    setStartPos(null);
    setEndPos(null);
    setVisitedCells(new Set());
    setPathCells([]);
  }, [gridSize]);

  const handleCellClick = (row, col, button) => {
    if (isRunning) return;

    const newGrid = grid.map(r => [...r]);

    if (button === 0) { // Left click - Start
      if (startPos) newGrid[startPos[0]][startPos[1]] = 0;
      newGrid[row][col] = 1;
      setStartPos([row, col]);
    } else if (button === 2) { // Right click - End
      if (endPos) newGrid[endPos[0]][endPos[1]] = 0;
      newGrid[row][col] = 2;
      setEndPos([row, col]);
    } else if (button === 1) { // Middle click - Obstacle
      newGrid[row][col] = newGrid[row][col] === 3 ? 0 : 3;
    }

    setGrid(newGrid);
  };

  const getCellColor = (row, col) => {
    const cell = grid[row] ? grid[row][col] : 0;
    const key = `${row},${col}`;

    if (cell === 1) return 'bg-green-500'; // Start
    if (cell === 2) return 'bg-red-500'; // End
    if (cell === 3) return 'bg-gray-800'; // Obstacle
    if (pathCells.some(p => p[0] === row && p[1] === col)) return 'bg-yellow-400';
    if (visitedCells.has(key)) return 'bg-blue-300';
    return 'bg-white';
  };

  return (
    <div className="overflow-auto" style={{ maxHeight: '600px' }}>
      <div
        className="inline-block border-2 border-gray-400"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${gridSize}, 25px)`,
          gap: '1px',
          backgroundColor: '#f0f0f0',
          padding: '1px'
        }}
      >
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`w-6 h-6 border border-gray-300 cursor-pointer transition-colors ${getCellColor(rowIndex, colIndex)}`}
              onClick={() => handleCellClick(rowIndex, colIndex, 0)}
              onContextMenu={(e) => {
                e.preventDefault();
                handleCellClick(rowIndex, colIndex, 2);
              }}
              onMouseDown={(e) => {
                if (e.button === 1) {
                  e.preventDefault();
                  handleCellClick(rowIndex, colIndex, 1);
                }
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Grid;
