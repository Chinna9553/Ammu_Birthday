import React, { useState, useEffect } from 'react';
import { Heart, Home, Gift } from 'lucide-react';
import { Fireworks } from './components/Fireworks';
import { FloatingHearts } from './components/FloatingHearts';
import { CelebrationItems } from './components/CelebrationItems';
import { SlidingImages } from './components/SlidingImages';
import { FinalMessage } from './components/FinalMessage';
import { BackgroundMusic } from './components/BackgroundMusic';

function App() {
  const [showSurprise, setShowSurprise] = useState(false);
  const [showStory, setShowStory] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowStory(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSurpriseComplete = () => {
    setShowFinalMessage(true);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-200 via-white to-pink-100">
      <FloatingHearts />
      
      {/* Background Heart */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none opacity-60">
        <Heart className="w-96 h-96 text-pink-100" />
      </div>

      {!showSurprise ? (
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
          {/* Home Button */}
          <button 
            onClick={() => setShowSurprise(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all"
          >
            <Home className="w-6 h-6 text-pink-500" />
          </button>

          {/* Main Birthday Wish */}
          <h1 
            className="text-4xl md:text-6xl text-pink-600 font-great-vibes mb-6 animate-slideIn text-center"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
          >
            Happy Birthday Ammu! 🎉🎂❤️
          </h1>

          <h2 
            className="text-3xl md:text-4xl text-pink-500 font-dancing-script mb-12 animate-pulse"
            style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}
          >
            Love You Forever ❤️
          </h2>

          {/* Love Story */}
          {showStory && (
            <div className="max-w-2xl mx-auto p-6 bg-white/80 rounded-2xl shadow-xl backdrop-blur-sm animate-fadeIn mb-8">
              <p className="text-xl font-parisienne text-gray-700 leading-relaxed text-center">
                Ammu, it's been almost 10 years since we first met, and every moment with you has been special. From the day our paths crossed, you've been the most valuable and beautiful part of my life. You bring joy, love, and warmth to my world, and I cherish every memory we've made together. No matter where life takes us, my love for you will always stay in my heart. 💖 Wherever I am, I carry you with me. ❤️
              </p>
            </div>
          )}

          {/* Surprise Button */}
          <button
            onClick={() => setShowSurprise(true)}
            className="mt-8 px-8 py-4 bg-gradient-to-r from-pink-400 to-pink-600 text-white rounded-full text-xl font-dancing-script shadow-lg hover:shadow-xl transform hover:scale-105 transition-all flex items-center gap-2"
          >
            <Gift className="w-6 h-6" />
            Click to See a Surprise 🎁
          </button>
        </div>
      ) : (
        <div className="relative z-10 min-h-screen">
          <BackgroundMusic />
          <Fireworks />
          <SlidingImages onComplete={handleSurpriseComplete} />
          {showFinalMessage && <FinalMessage />}
          <CelebrationItems />
          
          <button
            onClick={() => {
              setShowSurprise(false);
              setShowFinalMessage(false);
            }}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all"
          >
            <Home className="w-6 h-6 text-pink-500" />
          </button>
        </div>
      )}
    </div>
  );
}

export default App;