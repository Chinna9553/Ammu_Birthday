import React, { useEffect, useRef } from 'react';

export const BackgroundMusic = () => {
  const initialAudioRef = useRef<HTMLAudioElement>(null);
  const loopAudioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (initialAudioRef.current && loopAudioRef.current) {
      // Set volume for both audio elements
      initialAudioRef.current.volume = 0.5;
      loopAudioRef.current.volume = 0.5;

      // Play the initial audio
      initialAudioRef.current.play().catch(error => {
        console.log('Initial audio autoplay failed:', error);
      });

      // When initial audio ends, start the looping audio
      initialAudioRef.current.onended = () => {
        loopAudioRef.current?.play().catch(error => {
          console.log('Loop audio autoplay failed:', error);
        });
      };
    }
  }, []);

  return (
    <>
      <audio
        ref={initialAudioRef}
        src="https://files.catbox.moe/nsa6th.mp3"
      />
      <audio
        ref={loopAudioRef}
        src="https://files.catbox.moe/d1ek00.mp3"
        loop
      />
    </>
  );
};