import React from 'react';

const Controls = ({
  algorithm,
  setAlgorithm,
  isRunning,
  setIsRunning,
  gridSize,
  setGridSize,
  showMap,
  setShowMap
}) => {
  const algorithms = [
    { id: 'bfs', name: 'BFS', icon: '🔵' },
    { id: 'dfs', name: 'DFS', icon: '🟣' },
    { id: 'dijkstra', name: 'Dijkstra', icon: '🟡' },
    { id: 'astar', name: 'A*', icon: '⭐' }
  ];

  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 text-white">
      {/* Algorithm Selection */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-3">Select Algorithm</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {algorithms.map(algo => (
            <button
              key={algo.id}
              onClick={() => setAlgorithm(algo.id)}
              className={`p-3 rounded-lg font-semibold transition-all ${
                algorithm === algo.id
                  ? 'bg-white text-blue-900 scale-105'
                  : 'bg-white bg-opacity-20 hover:bg-opacity-30'
              }`}
            >
              <span className="text-xl">{algo.icon}</span> {algo.name}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Size Control */}
      <div className="mb-6">
        <label className="block font-semibold mb-2">Grid Size: {gridSize}x{gridSize}</label>
        <input
          type="range"
          min="10"
          max="50"
          value={gridSize}
          onChange={(e) => setGridSize(parseInt(e.target.value))}
          className="w-full"
          disabled={isRunning}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 flex-wrap">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className="flex-1 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-bold transition-colors"
        >
          {isRunning ? '⏸️ Pause' : '▶️ Visualize'}
        </button>
        <button
          onClick={() => window.location.reload()}
          className="flex-1 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-bold transition-colors"
        >
          🔄 Reset
        </button>
      </div>

      {/* Map Toggle */}
      <div className="mt-4">
        <button
          onClick={() => setShowMap(!showMap)}
          className={`w-full py-2 rounded-lg font-semibold transition-colors ${
            showMap
              ? 'bg-blue-500 hover:bg-blue-600'
              : 'bg-blue-400 hover:bg-blue-500'
          }`}
        >
          {showMap ? '🗺️ Showing Map' : '🗺️ Show Real Map'}
        </button>
      </div>
    </div>
  );
};

export default Controls;
