import React, { useEffect, useState } from 'react';
import { fetchData, postData } from '../api/api';

const ExampleComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [inputData, setInputData] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        setError('Failed to fetch data.');
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const handleSubmit = async () => {
    try {
      await postData({ value: inputData });
      setInputData('');
    } catch (error) {
      setError('Failed to post data.');
      console.error('Error posting data:', error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Data from Backend:</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>No data available</p>}
      
      <input 
        type="text" 
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        placeholder="Enter data"
      />
      <button onClick={handleSubmit}>Submit Data</button>
    </div>
  );
};

export default ExampleComponent;
