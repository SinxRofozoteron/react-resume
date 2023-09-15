import type { TooltipPosition } from './types';

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

  const finalPosition: TooltipPosition = {};

  if (spaceAtTop > spaceAtBottom) {
    if (spaceAtTop < tooltipRect.height) {
      // Tooltip does not fit, place it so it would be fully visible
      finalPosition.top = '10px';
      finalPosition.height = `calc(${spaceAtTop}px - 20px)`;
      finalPosition.width = 'auto';
    } else {
      // Since there is more space at the top we need to render tooltip to the top
      // of the related component
      finalPosition.bottom = `${window.innerHeight - relatedComponentRect.top}px`;
    }
  } else {
    if (spaceAtBottom < tooltipRect.height) {
      // Tooltip does not fit, place it so it would be fully visible
      finalPosition.bottom = '10px';
      finalPosition.height = `calc(${spaceAtBottom}px - 20px)`;
      finalPosition.width = 'auto';
    } else {
      // Since there is more space at the bottom we need to render tooltip to the bottom
      // of the related component
      finalPosition.top = `${relatedComponentRect.bottom}px`;
    }
  }

  if (spaceToLeft > spaceToRight) {
    if (spaceToLeft < tooltipRect.width) {
      // Tooltip does not fit, place it so it would be fully visible
      finalPosition.left = '10px';
      finalPosition.height = 'auto';
      finalPosition.width = `calc(${spaceToLeft}px - 20px)`;
    } else {
      // Since there is more space at the left we need to render tooltip to the left
      // of the related component
      finalPosition.right = `${window.innerWidth - relatedComponentRect.left}px`;
    }
  } else {
    if (spaceToRight < tooltipRect.width) {
      // Tooltip does not fit, place it so it would be fully visible
      finalPosition.right = '10px';
      finalPosition.height = 'auto';
      finalPosition.width = `calc(${spaceToRight}px - 20px)`;
    } else {
      finalPosition.left = `${relatedComponentRect.right}px`;
    }
  }

  // handle case when tooltip does not fit
  if (finalPosition.height === 'auto') {
    if (finalPosition.bottom) {
      delete finalPosition.bottom;
      finalPosition.top = '10px';
    } else if (finalPosition.top) {
      delete finalPosition.top;
      finalPosition.bottom = '10px';
    }
  }

  if (finalPosition.width === 'auto') {
    if (finalPosition.right) {
      delete finalPosition.right;
      finalPosition.left = '10px';
    } else if (finalPosition.left) {
      delete finalPosition.left;
      finalPosition.right = '10px';
    }
  }

  return finalPosition;
};
