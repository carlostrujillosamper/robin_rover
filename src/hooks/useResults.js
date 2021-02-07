import { useEffect, useState } from 'react';
import storeRobin from '../api/storeRobin'

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (skipNumber) => {
    try {
      const response = await storeRobin.get('', {
        params: {
          skip : skipNumber ? skipNumber : 0,
          limit : 20
        }
      });
      
      setResults([...results,...response.data]);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };
  useEffect(() => {
    searchApi();
  }, []);

  return [searchApi, results, errorMessage];
};