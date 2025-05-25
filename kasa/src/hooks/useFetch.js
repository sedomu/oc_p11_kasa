import { useEffect, useState } from 'react'

export function useFetch(url, id) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data);
        if (id !== undefined){
          setData(data.filter(logement => logement.id === id))
        }
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false))
  }, []);

  return [loading, data, error]
}