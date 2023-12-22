import { useEffect, useRef } from 'react';

const useTimeout = (callback, delay) => {
  const callbackRef = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;
    const id = setInterval(() => {
      if (callbackRef.current) {
        callbackRef.current();
      }
    }, delay);
    return () => clearTimeout(id);
  }, [delay]);
};

export default useTimeout;
