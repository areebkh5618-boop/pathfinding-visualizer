import React from 'react';

const MapView = () => {
  return (
    <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center">
      <div className="text-center">
        <p className="text-2xl mb-2">🗺️</p>
        <p className="text-gray-600 font-semibold">Real-world Map Integration</p>
        <p className="text-gray-500 text-sm mt-2">Leaflet.js integration coming soon</p>
        <p className="text-gray-500 text-sm">Visualize pathfinding on actual maps</p>
      </div>
    </div>
  );
};

export default MapView;
