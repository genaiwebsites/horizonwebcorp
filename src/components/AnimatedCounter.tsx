'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate, useMotionValue, useTransform } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
}

export const AnimatedCounter = ({ value, suffix = '', prefix = '' }: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1], // Custom bouncy/smooth ease
      });
      return controls.stop;
    }
  }, [isInView, motionValue, value]);

  const display = useTransform(motionValue, (current) => `${prefix}${Math.round(current)}${suffix}`);

  return <motion.span ref={ref}>{display}</motion.span>;
};
