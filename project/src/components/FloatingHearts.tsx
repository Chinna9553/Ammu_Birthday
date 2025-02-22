import React from 'react';
import { Heart } from 'lucide-react';

export const FloatingHearts = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <Heart
          key={i}
          className={`absolute text-pink-300 opacity-50 animate-float-${i % 5}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `scale(${0.5 + Math.random()})`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
};