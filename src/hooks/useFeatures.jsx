import { useState, useEffect } from 'react';
import { fetchFeatures } from '../api'; 

const useFeatures = () => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFeatures();
        if (data && data.success && Array.isArray(data.features)) {
          setFeatures(data.features);
        } else {
          setError("Invalid response format");
        }
      } catch (err) {
        setError("Error loading features");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { features, loading, error };
};

export default useFeatures;
