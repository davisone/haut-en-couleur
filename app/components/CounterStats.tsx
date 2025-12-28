'use client';

import { useEffect, useRef, useState } from 'react';
import {useTranslations} from 'next-intl';

interface Stat {
  value: number;
  labelKey: string;
  suffix?: string;
  prefix?: string;
}

function Counter({ target, suffix = '', prefix = '', duration = 2000 }: { target: number; suffix?: string; prefix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Fonction d'easing pour une animation plus fluide
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(step);
  }, [isVisible, target, duration]);

  return (
    <div ref={counterRef} className="text-5xl md:text-6xl font-bold text-primary">
      {prefix}{count}{suffix}
    </div>
  );
}

export default function CounterStats() {
  const t = useTranslations('Stats');

  const stats: Stat[] = [
    {
      value: 10,
      labelKey: 'experience',
      suffix: '+',
    },
    {
      value: 250,
      labelKey: 'projects',
      suffix: '+',
    },
    {
      value: 100,
      labelKey: 'satisfaction',
      suffix: '%',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-orange-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Counter
                target={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
                duration={2000}
              />
              <p className="mt-4 text-lg font-medium text-gray-700 dark:text-gray-300">
                {t(stat.labelKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}