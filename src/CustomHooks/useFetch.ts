import { useState, useEffect } from 'react';

type Val = {
  loading: boolean;
  error: boolean;
  data: {
    id: number;
    name: string;
  }[];
};
export const useFetch = (url: string) => {
  const [val, setVal] = useState<Val>({
    loading: false,
    error: false,
    data: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      setVal((prev) => ({ ...prev, loading: true }));
      try {
        const data = await fetch(url);
        const datajson = await data.json();
        if (data.status === 200) {
          setVal((prev) => ({ ...prev, loading: false, data: datajson }));
        } else {
          setVal((prev) => ({ ...prev, loading: false, error: true }));
        }
      } catch (error) {
        setVal((prev) => ({ ...prev, loading: false, error: true }));
      }
    };
    fetchData();
  }, []);
  return val;
};
