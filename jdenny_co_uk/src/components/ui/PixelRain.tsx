'use client';
 
import { useEffect } from 'react';
import { revealInit } from '@/lib/pixel-rain';
 
export default function PixelRainInit() {
  useEffect(() => {
    document.documentElement.classList.add('js-active')
    revealInit({
      config: {
        gridSize: 64, 
        fadeDuration: 100,
        unzip: 100,
        observer: {
            threshold: 0.5,
            rootMargin: '0px 0px -50% 0px',
        }
      }
    });
  }, []);
 
  return null;
}