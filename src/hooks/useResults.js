import { useEffect, useState } from 'react';
import storeRobin from '../api/storeRobin'

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async () => {
    
    try {
      const response = await storeRobin.get('', {
        params: {
          skip : 0,
          limit : 50
        }
      });
      
      setResults(response.data);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };
  useEffect(() => {
    searchApi();
  }, []);

  return [searchApi, results, errorMessage];
};