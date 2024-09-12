import React, { useState } from 'react';

const DataTable = ({ data }) => {
  const [sortConfig, setSortConfig] = useState(null);

  const sortedData = React.useMemo(() => {
    if (sortConfig !== null) {
      return [...data].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return data;
  }, [data, sortConfig]);

  const requestSort = key => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="mb-6">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th onClick={() => requestSort('songName')} className="cursor-pointer">Song Name</th>
            <th onClick={() => requestSort('artist')} className="cursor-pointer">Artist</th>
            <th onClick={() => requestSort('dateStreamed')} className="cursor-pointer">Date Streamed</th>
            <th onClick={() => requestSort('streamCount')} className="cursor-pointer">Stream Count</th>
            <th>User ID</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <tr key={index}>
              <td>{item.songName}</td>
              <td>{item.artist}</td>
              <td>{item.dateStreamed}</td>
              <td>{item.streamCount}</td>
              <td>{item.userId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
