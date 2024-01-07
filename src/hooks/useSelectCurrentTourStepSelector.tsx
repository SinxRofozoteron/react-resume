import { useMemo } from 'react';

import { selectCurrentTourStep } from '../state';

/** Creates memoized selector.
 * The main purpose of this hook is to memoize the selector function,
 * created by the selector creator.
 * @param componentId id of a component which will be passed down to the selector
 * @returns memoized selectCurrentTourStep selector
 */
export const useSelectCurrentTourStepSelector = (componentId: string) => {
  const memoizedSelector = useMemo(() => {
    const selector = selectCurrentTourStep(componentId);
    return selector;
  }, [componentId]);
  return memoizedSelector;
};
