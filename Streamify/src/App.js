import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import KeyMetrics from './components/KeyMetrics';
import DataVisualization from './components/DataVisualization';
import DataTable from './components/DataTable';
import { fetchMetrics } from './redux/metricsSlice';
import mockData from './data/mockData.json';

const App = () => {
  const dispatch = useDispatch();
  const metrics = useSelector((state) => state.metrics);

  useEffect(() => {
    // Simulate fetching data
    dispatch(fetchMetrics(mockData));
  }, [dispatch]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Streamify Dashboard</h1>
      <KeyMetrics metrics={metrics.keyMetrics} />
      <DataVisualization chartsData={metrics.chartsData} />
      <DataTable data={metrics.recentStreams} />
    </div>
  );
};

export default App;
