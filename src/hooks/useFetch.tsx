import { useEffect, useRef, useState } from 'react'

export function useFetch<Interface>(url: RequestInfo | URL, options?:RequestInit) {
  const [data, setData] = useState<Interface | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const optionsRef = useRef(options)
  optionsRef.current = options;

  useEffect(() => {
    const controller = new AbortController();
    const {signal} = controller;

    async function fetchData() {
      try {
        setLoading(true);
        setData(null);
        const response = await fetch(url, {
          signal,
          ...optionsRef.current
        });
        if (!response.ok) throw new Error('Erro: ' + response.status);
        const json = (await response.json()) as Interface;
        if (!signal.aborted) setData(json);
      } catch (erro) {
        if (!signal.aborted && erro instanceof Error) setError(erro.message);
      } finally {
        if (!signal.aborted) setLoading(false);
        setError(null);
      }
    }
    fetchData();

    return () => {
      controller.abort();
    }
  }, [url]);


  return {data, loading, error}
}
