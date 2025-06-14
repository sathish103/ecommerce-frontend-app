// useFetch.js placeholder
import { useState, useEffect } from 'react';
import axios from '../axiosInstance';

const useFetch = (url, method = 'get', body = null, runOnLoad = true) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(runOnLoad);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios({
        method,
        url,
        data: body
      });
      setData(res.data);
      setError('');
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (runOnLoad) fetchData();
  }, [url]);

  return { data, error, loading, refetch: fetchData };
};

export default useFetch;
