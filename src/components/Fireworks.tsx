import React from 'react';

export const Fireworks = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute w-4 h-4 rounded-full animate-firework"
          style={{
            left: `${Math.random() * 100}%`,
            backgroundColor: ['#FF69B4', '#FFD700', '#FF0000'][i % 3],
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};