import React, { useState } from 'react';
import Grid from './components/Grid';
import Controls from './components/Controls';
import MapView from './components/MapView';
import Legend from './components/Legend';
import './App.css';

function App() {
  const [algorithm, setAlgorithm] = useState('bfs');
  const [isRunning, setIsRunning] = useState(false);
  const [gridSize, setGridSize] = useState(20);
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 p-6">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-white mb-2">🤖 AI Pathfinding Visualizer</h1>
        <p className="text-blue-200">Interactive visualization of search algorithms</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Controls */}
          <Controls
            algorithm={algorithm}
            setAlgorithm={setAlgorithm}
            isRunning={isRunning}
            setIsRunning={setIsRunning}
            gridSize={gridSize}
            setGridSize={setGridSize}
            showMap={showMap}
            setShowMap={setShowMap}
          />

          {/* Grid or Map */}
          <div className="bg-white rounded-lg shadow-2xl p-4 mt-6">
            {showMap ? (
              <MapView />
            ) : (
              <Grid
                gridSize={gridSize}
                algorithm={algorithm}
                isRunning={isRunning}
              />
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Legend />

          {/* Algorithm Info */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-4 text-white">
            <h3 className="font-bold text-lg mb-3">Algorithm Info</h3>
            <div className="text-sm space-y-2">
              {algorithm === 'bfs' && (
                <p>BFS explores level by level, guaranteeing shortest path in unweighted graphs.</p>
              )}
              {algorithm === 'dfs' && (
                <p>DFS explores as far as possible along each branch before backtracking.</p>
              )}
              {algorithm === 'dijkstra' && (
                <p>Dijkstra finds shortest path considering edge weights.</p>
              )}
              {algorithm === 'astar' && (
                <p>A* uses heuristics to efficiently find the optimal path.</p>
              )}
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-4 text-white text-sm">
            <h3 className="font-bold mb-2">Instructions</h3>
            <ul className="space-y-1 text-xs">
              <li>🟢 Left click: Start point</li>
              <li>🔴 Right click: End point</li>
              <li>⬛ Middle click: Obstacle</li>
              <li>▶️ Click Visualize</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
