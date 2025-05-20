// src/hooks/useEvents.js
import { useState, useEffect } from 'react';
import { fetchEvents } from '../api'; // Adjust the path as necessary

const useEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await fetchEvents();
        if (data && data.success && Array.isArray(data.events)) {
          setEvents(data.events);
        } else {
          setError("Invalid response format");
        }
      } catch (err) {
        setError("Error fetching events");
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  return { events, loading, error };
};

export default useEvents;
