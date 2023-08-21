import { useLayoutEffect, useState } from 'react';

let referenceCount = 0;
let isWide = true;

export const useIsWideScreen = () => {
  const [isWideScreen, setIsWideScreen] = useState(isWide);

  const resizeHandler = () => {
    isWide = window.innerWidth >= 985;
    setIsWideScreen(isWide);
  };

  useLayoutEffect(() => {
    // Using reference count to share listener between multiple components
    if (!referenceCount) {
      isWide = window.innerWidth >= 985;
      setIsWideScreen(isWide);
      window.addEventListener('resize', resizeHandler);
    }
    referenceCount++;
    console.log('REFERENCE COUNT', referenceCount);

    return () => {
      referenceCount--;

      if (!referenceCount) {
        console.log('REFERENCE count IS 0, REMOVING LISTENER');
        window.removeEventListener('resize', resizeHandler);
      }
    };
  }, []);

  return isWideScreen;
};
