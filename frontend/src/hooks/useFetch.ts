import { useEffect, useState } from "react";

export default function useFetch<T = unknown>(url: string, initValue: T) {
  const [data, setData] = useState<T>(initValue);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      const resp = await fetch(url);
      if (isMounted) {
        const data = await resp.json();
        setData(data);
      }
    };
    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data };
}
