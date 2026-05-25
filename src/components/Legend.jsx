import React from 'react';

const Legend = () => {
  const items = [
    { color: 'bg-green-500', label: 'Start Point' },
    { color: 'bg-red-500', label: 'End Point' },
    { color: 'bg-gray-800', label: 'Obstacle' },
    { color: 'bg-blue-300', label: 'Visited' },
    { color: 'bg-yellow-400', label: 'Shortest Path' }
  ];

  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-4 text-white">
      <h3 className="font-bold text-lg mb-4">Legend</h3>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className={`w-6 h-6 rounded border border-gray-300 ${item.color}`} />
            <span className="text-sm">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Legend;
