import { useEffect, useState } from "react";

const { REACT_APP_API_BASE } = process.env;

const useFetchV2 = <T = unknown>(url: string) => {
  const [data, setData] = useState<T>([] as T);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // fetch here and update couponList
  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetch(`${REACT_APP_API_BASE}/${url}`)
      .then((resp) => {
        if (resp.status < 200 || resp.status >= 300) {
          throw new Error("Error");
        }
        return resp.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [url]);

  return { data, isLoading, error };
};

export default useFetchV2;
