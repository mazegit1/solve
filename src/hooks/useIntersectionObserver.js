// src/hooks/useIntersectionObserver.js
import { useEffect, useState } from 'react';

const useIntersectionObserver = (options) => {
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setEntry(entry), options);

    const elements = document.querySelectorAll('[data-observe]');
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, [options]);

  return entry;
};

export default useIntersectionObserver;
