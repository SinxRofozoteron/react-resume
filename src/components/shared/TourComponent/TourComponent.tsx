import { createPortal } from 'react-dom';
import { useCallback, useRef, useMemo } from 'react';

import { useSelector, useDispatch } from '../../../hooks';
import { TourTooltip } from './TourTooltip';

import type { ForwardRefExoticComponent, RefAttributes } from 'react';

import { selectCurrentTourStep, tourStepCompleted } from '@/src/state';
import { ACTIVE_TOUR_STEP_CLASS } from '@/src/tour';

type TourComponentWrapperProps<P, T extends HTMLElement> = {
  Component: ForwardRefExoticComponent<P & RefAttributes<T>>;
  componentProps?: P;
  componentId: string;
};

export const TourComponent = <P, T extends HTMLElement>({
  Component,
  componentId,
  componentProps
}: TourComponentWrapperProps<P, T>) => {
  const dispatch = useDispatch();
  const componentRef = useRef<T>(null);

  const currentStep = useSelector(selectCurrentTourStep(componentId));

  const handleActionCompleted = useCallback(() => {
    dispatch(tourStepCompleted());
  }, [dispatch]);

  const activeTourStepProps = useMemo(() => {
    return (
      currentStep && {
        className: ACTIVE_TOUR_STEP_CLASS,
        [currentStep.action]: handleActionCompleted
      }
    );
  }, [currentStep, handleActionCompleted]);

  if (currentStep && componentRef.current) {
    componentRef.current.scrollIntoView({
      behavior: 'instant',
      block: 'center',
      inline: 'center'
    });
  }

  return (
    <>
      <Component
        {...(componentProps as P)}
        {...activeTourStepProps}
        ref={componentRef}
      />
      {currentStep && currentStep.description && componentRef.current
        ? createPortal(
            <TourTooltip
              text={currentStep.description}
              relatedComponentRect={componentRef.current.getBoundingClientRect()}
            />,
            document.body
          )
        : null}
    </>
  );
};
