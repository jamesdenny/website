

import { useState, useEffect, useRef } from 'react';

export default function Demo() {
  const [squares, setSquares] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const generateSquares = () => {
      if (!containerRef?.current) return;
      
      const { width, height } = containerRef.current.getBoundingClientRect();
      const cols = Math.ceil(width / 32); // 2rem = 32px
      const rows = Math.ceil(height / 32);
      const total = cols * rows;

      // Palette: Various light-blues and light-greys from your theme tokens
      const colors = [
        '#e0f2fe', // light blue
        '#f1f5f9', // light grey (gray-100)
        '#e2e8f0', // gray-200
        '#bae6fd', // sky-200
        '#f8fafc'  // slate-50
      ];

      const newSquares = Array.from({ length: total }).map(
        () => colors[Math.floor(Math.random() * colors.length)]
      );
      setSquares(newSquares);
    };

    generateSquares();
    window.addEventListener('resize', generateSquares);
    return () => window.removeEventListener('resize', generateSquares);
  }, []);
  
  return <div ref={containerRef} className=" relative min-h-[50vh] bg-gray-200 flex items-center justify-center p-12 overflow-hidden">
    {squares.map((color, i) => (
      <div
        key={i}
        className="absolute w-8 h-8"
        style={{
          left: (i % Math.ceil((containerRef?.current?.getBoundingClientRect()?.width ?? 32) / 32)) * 32,
          top: Math.floor(i / Math.ceil((containerRef?.current?.getBoundingClientRect()?.width ?? 32) / 32)) * 32,
          backgroundColor: color,
        }}
      />
    ))}
  </div>;
}