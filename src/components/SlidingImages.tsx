import React, { useState, useEffect } from 'react';

const images = [
  "https://files.catbox.moe/yl6qhr.jpg",
  "https://files.catbox.moe/zbi5hc.jpg",
  "https://files.catbox.moe/4lscuo.jpg",
  "https://files.catbox.moe/71q24i.jpg",
  "https://files.catbox.moe/aznazu.jpg",
  "https://files.catbox.moe/2sysjs.jpg"
];

export const SlidingImages = ({ onComplete }: { onComplete: () => void }) => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [imageLoaded, setImageLoaded] = useState<boolean[]>([]);

  useEffect(() => {
    // Preload images
    images.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImageLoaded(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      };
    });
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (currentIndex < images.length - 1) {
      timer = setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
      }, 5000); // 5 second gap between images
    } else {
      setTimeout(onComplete, 1000);
    }

    return () => clearTimeout(timer);
  }, [currentIndex, onComplete]);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex items-center justify-center transition-all duration-[3000ms] ease-in-out
            ${index <= currentIndex ? 'opacity-100' : 'opacity-0 translate-x-full'}
            ${index < currentIndex ? 'translate-x-[-100%]' : ''}`}
        >
          <div className="relative w-[80%] max-w-2xl mx-auto"> {/* Reduced size to 80% */}
            <img
              src={img}
              alt="Love"
              className="w-full h-auto rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-transform duration-[3000ms]"
              style={{
                opacity: imageLoaded[index] ? 1 : 0,
                transition: 'opacity 1s ease-in-out'
              }}
              onLoad={() => {
                setImageLoaded(prev => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 rounded-xl" />
          </div>
        </div>
      ))}
    </div>
  );
};