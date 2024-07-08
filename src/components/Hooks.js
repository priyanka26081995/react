import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Perform data fetching or any side effect
    const fetchData = async () => {
      const response = await fetch('https://dummyjson.com/users');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []); // Empty dependency array means it runs once after initial render

  return (
    <div>
      <h2>Data:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataFetcher;
