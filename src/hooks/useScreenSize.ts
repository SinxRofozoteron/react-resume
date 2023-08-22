import { useLayoutEffect } from 'react';
import debounce from 'lodash/debounce';

import { useSelector, useDispatch } from './stateHooks';
import { setScreenWidth } from '../state/slices';

let referenceCount = 0;

export const useScreenSize = () => {
  const dispatch = useDispatch();
  const screenWidth = useSelector(state => state.view.screenWidth);

  const resizeHandler = debounce(() => {
    dispatch(setScreenWidth(window.innerWidth));
  }, 300);

  useLayoutEffect(() => {
    // Using reference count to share listener between multiple components
    if (window) {
      if (!referenceCount) {
        dispatch(setScreenWidth(window.innerWidth));
        window.addEventListener('resize', resizeHandler);
      }
      referenceCount++;
    }

    return () => {
      if (window) {
        referenceCount--;

        if (!referenceCount) {
          window.removeEventListener('resize', resizeHandler);
        }
      }
    };
  }, [dispatch, resizeHandler]);

  return screenWidth;
};
