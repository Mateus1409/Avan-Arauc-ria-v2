'use client';

import { useEffect, useState, useRef } from 'react';

interface UseCountUpOptions {
  end: number;
  start?: number;
  duration?: number;
  delay?: number;
  formatter?: (value: number) => string;
}

export function useCountUp({
  end,
  start = 0,
  duration = 2000,
  delay = 0,
  formatter,
}: UseCountUpOptions) {
  const [count, setCount] = useState(start);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    const startTime = Date.now() + delay;
    const endTime = startTime + duration;

    const animate = () => {
      const now = Date.now();

      if (now < startTime) {
        requestAnimationFrame(animate);
        return;
      }

      if (now >= endTime) {
        setCount(end);
        return;
      }

      const progress = (now - startTime) / duration;
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (end - start) * easedProgress);
      setCount(current);

      requestAnimationFrame(animate);
    };

    const frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isActive, end, start, duration, delay]);

  useEffect(() => {
    const timer = setTimeout(() => setIsActive(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const displayValue = formatter ? formatter(count) : count.toLocaleString('pt-BR');

  return { count: displayValue, isActive };
}

export function useCountUpOnView(
  end: number,
  options: Omit<UseCountUpOptions, 'end'> = {}
) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { count, isActive } = useCountUp({ end, ...options, delay: hasAnimated ? options.delay : 0 });

  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated]);

  return { ref, count, isVisible };
}

function useIntersectionObserver(options: { threshold?: number; triggerOnce?: boolean } = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (options.triggerOnce !== false) {
            observer.unobserve(element);
          }
        }
      },
      { threshold: options.threshold || 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [elementRef.current, options.threshold, options.triggerOnce]);

  const setRef = (node: HTMLElement | null) => {
    elementRef.current = node;
  };

  return [setRef, isVisible] as const;
}