import React from 'react';
import { Line, Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

const DataVisualization = ({ chartsData }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">User Growth</h2>
      <Line data={chartsData.userGrowth} />
      <h2 className="text-xl font-semibold mb-4 mt-6">Revenue Distribution</h2>
      <Pie data={chartsData.revenueDistribution} />
      <h2 className="text-xl font-semibold mb-4 mt-6">Top 5 Streamed Songs</h2>
      <Bar data={chartsData.topSongs} />
    </div>
  );
};

export default DataVisualization;
