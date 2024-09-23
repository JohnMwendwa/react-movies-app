import { useEffect, useState } from "react";

export function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]); // Only re-call effect if value or delay changes
  return debouncedValue;
}
