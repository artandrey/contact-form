import { useCallback, useState } from 'react';

export default <D extends unknown[], T, E>(
  fetch: (...args: D) => Promise<Response>,
  onResolve?: (error: E | null, data: T | null) => void
) => {
  const [sending, setSending] = useState<boolean>(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<E | null>(null);
  const send = useCallback((...args: D) => {
    setSending(true);
    fetch(...args)
      .then(async (data) => {
        if (data.status !== 200) throw Error(await data.json());
        return await data.json();
      })
      .then((data) => {
        setSending(false);
        setData(data);
        setError(null);
        onResolve && onResolve(null, data);
      })
      .catch((error) => {
        setSending(false);
        setData(null);
        setError(error);
        onResolve && onResolve(error, null);
      });
  }, []);
  return { sending, data, error, send };
};
