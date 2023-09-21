import type { TooltipPosition } from './types';

const MIN_READABLE_WSIZE = 250;
const MIN_READABLE_HSIZE = 200;

/** Calculate tooltip position based
 * on related element position and tooltip dementions
 * @param relatedComponentRect DOMRect of related element
 * @param tooltipRect DOMRect of the tooltip
 */
export const calculateTooltipPosition = (
  relatedComponentRect: DOMRect,
  tooltipRect: DOMRect
): TooltipPosition => {
  const spaceAtTop = relatedComponentRect.top;
  const spaceAtBottom = window.innerHeight - relatedComponentRect.bottom;

  const spaceToLeft = relatedComponentRect.left;
  const spaceToRight = window.innerWidth - relatedComponentRect.right;

  const tooltipArea = tooltipRect.height * tooltipRect.width;
  let tooltipWidth: number;
  let tooltipHeight: number;

  const relatedComponentWCenter =
    relatedComponentRect.left + relatedComponentRect.width / 2;
  const relatedComponentHCenter =
    relatedComponentRect.top + relatedComponentRect.height / 2;

  const finalPosition: TooltipPosition = {
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '0px',
      height: '0px'
    }
  };

  const maxSpace = Math.max(spaceAtTop, spaceAtBottom, spaceToLeft, spaceToRight);

  const positionHorizontally = () => {
    const left = relatedComponentWCenter - tooltipWidth / 2;
    const right = window.innerWidth - (relatedComponentWCenter + tooltipWidth / 2);

    if (left < 0 && right < 0) {
      // tooltip does not fit horizontally
      finalPosition.left = '0px';
      finalPosition.right = '0px';
    } else if (left < 0) {
      finalPosition.left = '0px';
    } else if (right < 0) {
      finalPosition.right = '0px';
    } else {
      finalPosition.left = `${left}px`;
      finalPosition.right = `${right}px`;
    }
  };

  const positionVertically = () => {
    const top = relatedComponentHCenter - tooltipHeight / 2;
    const bottom = window.innerHeight - (top + tooltipHeight);

    if (top < 0 && bottom < 0) {
      // Tooltip does not fit
      finalPosition.top = '0px';
      finalPosition.right = '0px';
      finalPosition.bottom = '0px';
    } else if (top < 0) {
      finalPosition.top = '0px';
    } else if (bottom < 0) {
      finalPosition.bottom = '0px';
    } else {
      finalPosition.top = `${top}px`;
      finalPosition.bottom = `${bottom}px`;
    }
  };

  if (maxSpace === spaceAtTop) {
    // tooltip should be at the top
    const areaAtTop =
      spaceAtTop * window.innerWidth - 20 * spaceAtTop - 20 * window.innerWidth;
    tooltipHeight = Math.max(
      Math.min(tooltipRect.height, spaceAtTop),
      MIN_READABLE_HSIZE
    );
    tooltipWidth = Math.max(tooltipArea / tooltipHeight, MIN_READABLE_WSIZE);

    if (areaAtTop < tooltipArea) {
      // Tooltip does not fit, it will overlap with the related component
      finalPosition.top = '0px';
      finalPosition.right = '0px';
      finalPosition.left = '0px';
    } else {
      // Tolltip fits, it needs to be placed directly above the related component
      if (spaceAtTop < MIN_READABLE_HSIZE) {
        finalPosition.top = '10px';
      } else {
        finalPosition.bottom = `${window.innerHeight - relatedComponentRect.top}px`;
      }

      positionHorizontally();
      finalPosition['&:after'] = {
        ...finalPosition['&:after'],
        top: 'calc(100% + 6px)',
        left: '50%',
        borderTop: `10px solid`,
        borderRight: `${tooltipWidth / 4}px solid transparent !important`,
        borderLeft: `${tooltipWidth / 4}px solid transparent !important`,
        transform: 'translateX(-50%)'
      };
    }
  } else if (maxSpace === spaceToRight) {
    // tooltip should be on the right

    const areaToTheRight =
      spaceToRight * window.innerHeight - 20 * spaceToRight - 20 * window.innerHeight;
    tooltipWidth = Math.max(
      Math.min(tooltipRect.width, spaceToRight),
      MIN_READABLE_WSIZE
    );
    tooltipHeight = Math.max(tooltipArea / tooltipWidth, MIN_READABLE_HSIZE);

    if (areaToTheRight < tooltipArea) {
      // Tooltip does not fit
      finalPosition.top = '0px';
      finalPosition.right = '0px';
      finalPosition.bottom = '0px';
    } else {
      // Tooltip fits,
      // it needs to be placed directly to the right of the related component
      if (spaceToRight < MIN_READABLE_WSIZE) {
        finalPosition.right = '10px';
      } else {
        finalPosition.left = `${relatedComponentRect.right}px`;
      }
      positionVertically();
      finalPosition['&:after'] = {
        ...finalPosition['&:after'],
        right: 'calc(100% + 6px)',
        top: '50%',
        transform: 'translateY(-50%)',
        borderRight: `10px solid`,
        borderTop: `${tooltipHeight / 4}px solid transparent !important`,
        borderBottom: `${tooltipHeight / 4}px solid transparent !important`
      };
    }
  } else if (maxSpace === spaceAtBottom) {
    // Tooltip should be at the bottom

    const areaAtTheBottom =
      spaceAtBottom * window.innerWidth - spaceAtBottom * 20 - window.innerWidth * 20;
    tooltipHeight = Math.max(
      Math.min(tooltipRect.height, spaceAtBottom),
      MIN_READABLE_HSIZE
    );
    tooltipWidth = Math.max(tooltipArea / tooltipHeight, MIN_READABLE_WSIZE);

    if (areaAtTheBottom < tooltipArea) {
      // Tooltip does not fit
      finalPosition.right = '0px';
      finalPosition.bottom = '0px';
      finalPosition.left = '0px';
    } else {
      // Tooltip fits,
      // It needs to be placed directly under the related component
      if (spaceAtBottom < MIN_READABLE_HSIZE) {
        finalPosition.bottom = '10px';
      } else {
        finalPosition.top = `${relatedComponentRect.bottom}px`;
      }
      positionHorizontally();
      finalPosition['&:after'] = {
        ...finalPosition['&:after'],
        bottom: 'calc(100% + 6px)',
        left: '50%',
        transform: 'translateX(-50%)',
        borderRight: `${tooltipWidth / 4}px solid transparent !important`,
        borderLeft: `${tooltipWidth / 4}px solid transparent !important`,
        borderBottom: `10px solid`
      };
    }
  } else {
    // Tooltip should be on the left

    const areaToTheLeft =
      spaceToLeft * window.innerHeight - 20 * spaceToLeft - 20 * window.innerHeight;
    tooltipWidth = Math.max(
      Math.min(tooltipRect.width, spaceToLeft),
      MIN_READABLE_WSIZE
    );
    tooltipHeight = Math.max(tooltipArea / tooltipWidth, MIN_READABLE_HSIZE);

    if (areaToTheLeft < tooltipArea) {
      // Tooltip does not fit
      finalPosition.bottom = '0px';
      finalPosition.left = '0px';
      finalPosition.top = '0px';
    } else {
      // Tooltip fits,
      // It needs to be placed directly to the right of the related component
      if (areaToTheLeft < MIN_READABLE_WSIZE) {
        finalPosition.left = `10px`;
      } else {
        finalPosition.right = `${window.innerWidth - relatedComponentRect.left}px`;
      }
      positionVertically();
      finalPosition['&:after'] = {
        ...finalPosition['&:after'],
        left: 'calc(100% + 6px)',
        top: '50%',
        transform: 'translateY(-50%)',
        borderLeft: `10px solid`,
        borderTop: `${tooltipHeight / 4}px solid transparent !important`,
        borderBottom: `${tooltipHeight / 4}px solid transparent !important`
      };
    }
  }

  return finalPosition;
};
