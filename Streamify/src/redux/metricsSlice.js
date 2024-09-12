import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  keyMetrics: {
    TotalUsers: 0,
    ActiveUsers: 0,
    TotalStreams: 0,
    Revenue: 0,
    TopArtist: '',
  },
  chartsData: {
    userGrowth: {
      labels: [],
      datasets: [
        {
          label: 'Total Users',
          data: [],
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
        },
        {
          label: 'Active Users',
          data: [],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
        },
      ],
    },
    revenueDistribution: {
      labels: ['Subscriptions', 'Ads'],
      datasets: [
        {
          data: [],
          backgroundColor: ['#ff6384', '#36a2eb'],
          borderColor: '#fff',
          borderWidth: 1,
        },
      ],
    },
    topSongs: {
      labels: [],
      datasets: [
        {
          label: 'Top 5 Streamed Songs',
          data: [],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    },
  },
  recentStreams: [],
};

const metricsSlice = createSlice({
  name: 'metrics',
  initialState,
  reducers: {
    fetchMetrics: (state, action) => {
      // Update state with action.payload
      state.keyMetrics = action.payload.keyMetrics;
      state.chartsData = action.payload.chartsData;
      state.recentStreams = action.payload.recentStreams;
    },
  },
});

export const { fetchMetrics } = metricsSlice.actions;
export default metricsSlice.reducer;
