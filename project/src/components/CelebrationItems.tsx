import React from 'react';

const items = ['🎂', '🍫', '🧸', '❤️', '💋'];

export const CelebrationItems = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-around p-8 animate-slideUp">
      {items.map((item, i) => (
        <div
          key={i}
          className="text-6xl animate-bounce"
          style={{ animationDelay: `${i * 0.2}s` }}
        >
          {item}
        </div>
      ))}
    </div>
  );
};