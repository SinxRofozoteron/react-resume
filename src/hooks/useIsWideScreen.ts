import { useState, useEffect } from 'react';

import { useScreenSize } from './useScreenSize';

export const useIsWideScreen = () => {
  const screenWidth = useScreenSize();
  const [isWideScreen, setIsWideScreen] = useState((screenWidth || 1000) >= 985);

  useEffect(() => {
    setIsWideScreen((screenWidth || 1000) >= 985);
  }, [screenWidth]);

  return isWideScreen;
};
