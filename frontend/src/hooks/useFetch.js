import { useState, useEffect, useCallback } from "react";

// Custom hook dùng chung để gọi API và quản lý trạng thái loading/error/data
export function useFetch(fetchFn, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reloadIndex, setReloadIndex] = useState(0);

  const refetch = useCallback(() => {
    setReloadIndex((prev) => prev + 1);
  }, []);

  useEffect(() => {
    let active = true;

    const runFetch = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await fetchFn();
        if (active) {
          setData(result);
        }
      } catch (fetchError) {
        if (active) {
          setError(fetchError);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    runFetch();

    return () => {
      active = false;
    };
  }, [fetchFn, reloadIndex, ...deps]);

  return { data, loading, error, refetch };
}
