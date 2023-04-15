import React from 'react';
import { useState } from "react";

interface UseEndpointFetchDataOptions {
  body?: any;
  headers?: Record<string, string>;
}

export const useEndpoint = <T>(baseUrl: string = '') => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  const fetchData = async (
    method: string,
    url: string,
    { body = {}, headers = {} }: UseEndpointFetchDataOptions | undefined = {},
  ) => {
    setLoading(true);

    try {
      const parsedUrl = baseUrl ? `${baseUrl}${url}` : url;
      const response = await fetch(parsedUrl, {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: body ? JSON.stringify(body) : undefined,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  return { data, isLoading, error, fetchData };
};
