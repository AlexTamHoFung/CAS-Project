import { useEffect, useState } from "react";

const useFetchV3 = <T = unknown>(fn: () => Promise<T>) => {
  const [data, setData] = useState<T>([] as T);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // fetch here and update couponList
  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fn()
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [fn]);

  return { data, isLoading, error };
};

export default useFetchV3;
