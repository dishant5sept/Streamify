import React from 'react';

const KeyMetrics = ({ metrics }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
      {Object.entries(metrics).map(([key, value]) => (
        <div key={key} className="bg-white p-4 shadow rounded-lg">
          <h3 className="text-xl font-bold">{value}</h3>
          <p className="text-gray-600">{key}</p>
        </div>
      ))}
    </div>
  );
};

export default KeyMetrics;
