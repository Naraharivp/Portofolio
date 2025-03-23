'use client'

import React, { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';

interface ScrollProgressProps {
  color?: string;
  height?: number;
  showPercentage?: boolean;
}

const ScrollProgress: React.FC<ScrollProgressProps> = ({
  color = '#C7EA46',
  height = 4,
  showPercentage = false,
}) => {
  const { scrollYProgress } = useScroll();
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setScrollPercentage(Math.round(latest * 100));
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 origin-left z-50"
        style={{ 
          scaleX: scrollYProgress,
          backgroundColor: color,
          height: height
        }}
      />
      
      {showPercentage && (
        <div className="fixed bottom-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-2 rounded-full z-50">
          <p className="text-sm font-mono" style={{ color }}>
            {scrollPercentage}%
          </p>
        </div>
      )}
    </>
  );
};

export default ScrollProgress;
