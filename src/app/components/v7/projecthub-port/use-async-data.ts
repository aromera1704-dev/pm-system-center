import { useEffect, useState, type DependencyList } from "react";

type AsyncState<T> = {
  data: T | null;
  error: string | null;
  isLoading: boolean;
};

export function useAsyncData<T>(load: () => Promise<T>, dependencies: DependencyList): AsyncState<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isCancelled = false;

    async function run() {
      setIsLoading(true);
      setError(null);

      try {
        const result = await load();
        if (!isCancelled) {
          setData(result);
        }
      } catch (caughtError) {
        if (!isCancelled) {
          setError(caughtError instanceof Error ? caughtError.message : "Error inesperado");
        }
      } finally {
        if (!isCancelled) {
          setIsLoading(false);
        }
      }
    }

    void run();

    return () => {
      isCancelled = true;
    };
  }, dependencies);

  return { data, error, isLoading };
}
