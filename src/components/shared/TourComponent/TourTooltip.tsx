import styled from 'styled-components';
import { useState, useLayoutEffect } from 'react';
import { useRef } from 'react';
import merge from 'lodash/merge';

import { useDispatch } from '../../../hooks';
import { calculateTooltipPosition } from './TourTooltip.utils';
import { CloseButton as CloseButtonRaw, ConfirmationDialog } from '../../common';

import type { TooltipPosition } from './types';

import { stopTour } from '@/src/state';

type TooltipProps = {
  $position: TooltipPosition | null;
  $show: boolean;
};

const Tootip = styled.div<TooltipProps>(({ theme, $position, $show }) => ({
  position: 'absolute',
  display: $show ? 'flex' : 'none',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
  padding: '5px',
  backgroundColor: theme.fourthColor,
  zIndex: 100,
  color: theme.primaryColor,
  border: `6px double ${theme.secondaryColor}`,
  maxWidth: '100%',
  margin: '10px',
  p: {
    margin: 0,
    padding: '0 5px'
  },
  ...$position,
  '&:after': $position
    ? merge($position['&:after'], { borderColor: theme.primaryColor })
    : {}
}));

const CloseButton = styled(CloseButtonRaw)`
  align-self: flex-end;
  max-width: 100px;
`;

const CancelTourButton = styled.button(({ theme }) => ({
  backgroundColor: theme.thirdColor,
  color: theme.textColor,
  fontSize: '1rem',
  padding: '4px',
  maxWidth: '150px',
  border: `1px solid ${theme.secondaryColor}`,
  '&:hover': {
    backgroundColor: theme.primaryColor,
    borderColor: theme.thirdColor
  }
}));

type TourTooltipProps = {
  text: string;
  relatedComponentRect: DOMRect;
};

export const TourTooltip = ({ text, relatedComponentRect }: TourTooltipProps) => {
  const dispatch = useDispatch();
  const tooltipRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState<TooltipPosition | null>(null);
  const [showTooltip, setShowTooltip] = useState<boolean>(true);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);

  const handleTooltipToggle = () => {
    setShowTooltip(prevState => !prevState);
  };

  const handleToggleConfirmation = () => {
    setShowConfirmation(prevState => !prevState);
  };

  const handleCancelTour = () => {
    dispatch(stopTour());
    handleToggleConfirmation();
  };

  useLayoutEffect(() => {
    if (tooltipRef.current) {
      const tooltipPosition = calculateTooltipPosition(
        relatedComponentRect,
        tooltipRef.current.getBoundingClientRect()
      );
      setPosition(tooltipPosition);
    }
  }, [relatedComponentRect]);

  return (
    <>
      <Tootip ref={tooltipRef} $position={position} role="dialog" $show={showTooltip}>
        <CloseButton
          aria-label="Close tooltip"
          onClick={handleTooltipToggle}
          size="small"
        />
        <p>{text}</p>
        <CancelTourButton onClick={handleToggleConfirmation}>
          Cancel Tour
        </CancelTourButton>
      </Tootip>
      <ConfirmationDialog
        show={showConfirmation}
        onNoClick={handleToggleConfirmation}
        onYesClick={handleCancelTour}
        onCloseClick={handleToggleConfirmation}
      />
    </>
  );
};
