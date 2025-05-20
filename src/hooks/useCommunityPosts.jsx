import { useState, useEffect } from 'react';
import { fetchCommunityPosts } from '../api'; 

const useCommunityPosts = () => {
  const [communityPosts, setCommunityPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCommunityPosts = async () => {
      try {
        const data = await fetchCommunityPosts();
        if (data && data.success && Array.isArray(data.posts)) {  
          setCommunityPosts(data.posts); 
        } else {
          setError("Invalid response format");
        }
      } catch (err) {
        setError("Error fetching community posts");
      } finally {
        setLoading(false);
      }
    };

    loadCommunityPosts();
  }, []);

  return { communityPosts, loading, error };
};

export default useCommunityPosts;

