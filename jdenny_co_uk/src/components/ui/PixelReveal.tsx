'use client';

import React, { useEffect, useState, useRef } from 'react';

interface PixelRevealProps {
  children: React.ReactNode;
  className?: string;
}

export default function PixelReveal({ children, className = "" }: PixelRevealProps) {
  const [squares, setSquares] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateGrid = () => {
      if (!containerRef.current) return;
      
      const { width, height } = containerRef.current.getBoundingClientRect();
      const cols = Math.ceil(width / 32); // 32px = 2rem
      const rows = Math.ceil(height / 32);
      
      const colors = [
        '#e0f2fe', // Light Blue
        '#f1f5f9', // Light Grey (gray-100)
        '#e2e8f0', // gray-200
        '#bae6fd', // sky-200
        '#f8fafc'  // slate-50
      ];

      const newSquares = Array.from({ length: cols * rows }).map(
        () => colors[Math.floor(Math.random() * colors.length)]
      );
      
      setSquares(newSquares);
    };

    updateGrid();
    window.addEventListener('resize', updateGrid);
    return () => window.removeEventListener('resize', updateGrid);
  }, []);

  return (<>
   
    <div ref={containerRef} className={`relative z-0 h-full w-full ${className}`}>
        {/* The Animated Overlay */}
        <div className="demo-overlay">
        {squares.map((color, i) => (
            <div
            key={i}
            className="demo-square"
            style={{ 
                // @ts-ignore
                '--sq-color': color 
            }}
            />
        ))}
        </div>
        {/* The Wrapped Content */}
        {children}
    </div>
</>);
}