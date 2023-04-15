import { useEffect, useState } from 'react';

type AsyncHandler<T> = (...args: any[]) => Promise<T | null>;

interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

type AsyncAction<T> = (...args: any[]) => Promise<T | null>;

interface UseAsyncOptions {
  immediate?: boolean;
}

function useAsync<T>(
  handler: AsyncHandler<T>,
  options: UseAsyncOptions = { immediate: true }
): AsyncState<T> & { act: AsyncAction<T> } {
  const { immediate = true } = options;
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(immediate);
  const [error, setError] = useState<Error | null>(null);

  const act: AsyncAction<T> = async (...args) => {
    setLoading(true);
    setError(null);

    try {
      const result = await handler(...args);
      setData(result);
      setLoading(false);
      return result;
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err);
      }
      setLoading(false);
      throw err;
    }
  };

  useEffect(() => {
    if (immediate) {
      void act();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { data, loading, error, act };
}

export default useAsync;
