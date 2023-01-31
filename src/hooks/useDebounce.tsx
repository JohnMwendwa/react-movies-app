import { useEffect, useState } from "react";

export function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    let mount = true;
    let timeout: number;

    if (mount) {
      timeout = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
    }

    return () => {
      mount = false;
      clearTimeout(timeout);
    };
  }, [value, delay]); // Only re-call effect if value or delay changes
  return debouncedValue;
}
