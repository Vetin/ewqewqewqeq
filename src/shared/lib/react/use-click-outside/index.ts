import { RefObject, useCallback, useEffect } from 'react';

export interface UseClickOutside {
  ref: RefObject<HTMLElement>;
  handler: (e: MouseEvent) => void;
}

export const useClickOutside = (payload: UseClickOutside) => {
  const { ref, handler } = payload;

  const documentHandler = useCallback(
    (e: MouseEvent) => {
      if (!ref.current || ref.current !== e.target || !ref.current.contains(e.target as Node)) {
        return;
      }

      handler(e);
    },
    [ref, handler],
  );

  useEffect(() => {
    document.addEventListener('click', documentHandler);
    return () => document.removeEventListener('click', documentHandler);
  }, [documentHandler]);
};
