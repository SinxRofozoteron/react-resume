import { useLayoutEffect, useState, useEffect } from 'react';
import debounce from 'lodash/debounce';

import { useSelector, useDispatch } from './stateHooks';
import { setScreenWidth } from '../state/slices';

let referenceCount = 0;

export const useIsWideScreen = () => {
  const dispatch = useDispatch();
  const screenWidth = useSelector(state => state.view.screenWidth);
  const [isWideScreen, setIsWideScreen] = useState((screenWidth || 1000) >= 985);

  const resizeHandler = debounce(() => {
    dispatch(setScreenWidth(window.innerWidth));
  }, 300);

  useEffect(() => {
    setIsWideScreen((screenWidth || 1000) >= 985);
  }, [screenWidth]);

  useLayoutEffect(() => {
    // Using reference count to share listener between multiple components
    if (!referenceCount) {
      dispatch(setScreenWidth(window.innerWidth));
      window.addEventListener('resize', resizeHandler);
    }
    referenceCount++;

    return () => {
      referenceCount--;

      if (!referenceCount) {
        window.removeEventListener('resize', resizeHandler);
      }
    };
  }, []);

  return isWideScreen;
};
