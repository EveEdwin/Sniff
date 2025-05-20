// src/hooks/useSuccessStories.js
import { useState, useEffect } from 'react';
import { fetchSuccessStories } from '../api'; 

const useSuccessStories = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadStories = async () => {
      try {
        const data = await fetchSuccessStories();
        if (data && data.success && Array.isArray(data.stories)) {
          setStories(data.stories);
        } else {
          setError("Invalid response format");
        }
      } catch (err) {
        setError("Error fetching success stories");
      } finally {
        setLoading(false);
      }
    };

    loadStories();
  }, []);

  return { stories, loading, error };
};

export default useSuccessStories;
