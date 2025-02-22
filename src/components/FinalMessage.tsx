import React, { useState, useEffect } from 'react';

const colors = [
  'text-violet-600',
  'text-pink-600',
  'text-red-600',
  'text-purple-600',
  'text-fuchsia-600'
];

export const FinalMessage = () => {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 500); // Change color every 500ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center animate-fadeIn backdrop-blur-sm bg-white/30">
      <h1 
        className={`text-7xl font-great-vibes text-center p-8 rounded-xl 
          shadow-[0_10px_50px_rgba(0,0,0,0.2)] backdrop-blur-sm
          animate-pulse transition-colors duration-500 ${colors[colorIndex]}`}
        style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.2)' }}
      >
        Love You Bujji ❤️
      </h1>
    </div>
  );
};