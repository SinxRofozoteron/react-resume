import { useState, useEffect } from 'react';

import { useScreenSize } from './useScreenSize';

export const useIsSmallScreen = () => {
  const screenWidth = useScreenSize();
  const [isSmallScreen, setIsSmallScreen] = useState((screenWidth || 1000) < 591);

  useEffect(() => {
    setIsSmallScreen((screenWidth || 1000) < 591);
  }, [screenWidth]);

  return isSmallScreen;
};
