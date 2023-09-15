import { calculateTooltipPosition } from '../TourTooltip.utils';

describe('TourTooltip utils', () => {
  describe('calculateTooltipPosition', () => {
    Object.defineProperty(window, 'innerHeight', { value: 100 });
    Object.defineProperty(window, 'innerWidth', { value: 100 });

    it.each([
      [
        'top-left',
        'more space is at the top and left and tooltip fits',
        { top: 50, bottom: 80, left: 50, right: 80 },
        { height: 10, width: 10 },
        { bottom: '50px', right: '50px' }
      ],
      [
        'top-right',
        'more space is at the top and right and tooltip fits',
        { top: 50, bottom: 80, left: 20, right: 50 },
        { height: 10, width: 10 },
        { bottom: '50px', left: '50px' }
      ],
      [
        'bottom-right',
        'more space is at the right and bottom and tooltip fits',
        { top: 20, bottom: 50, left: 20, right: 50 },
        { height: 10, width: 10 },
        { top: '50px', left: '50px' }
      ],
      [
        'bottom-left',
        'more space is at the left and bottom and tooltip fits',
        { top: 20, bottom: 50, left: 50, right: 80 },
        { height: 10, width: 10 },
        { top: '50px', right: '50px' }
      ],
      [
        'top-left with related component overlap',
        'more space is at the left and top and tooltip does not fit',
        { top: 50, bottom: 80, left: 50, right: 80 },
        { height: 60, width: 60 },
        {
          bottom: '10px',
          height: 'auto',
          width: 'calc(50px - 20px)',
          left: '10px'
        }
      ],
      [
        'top-right with related component overlap',
        'more space is at the right and top and tooltip does not fit',
        { top: 50, bottom: 80, left: 20, right: 50 },
        { height: 60, width: 60 },
        {
          bottom: '10px',
          height: 'auto',
          width: 'calc(50px - 20px)',
          right: '10px'
        }
      ],
      [
        'bottom-right with related component overlap',
        'more space is at the right and bottom and tooltip does not fit',
        { top: 20, bottom: 50, left: 20, right: 50 },
        { height: 60, width: 60 },
        {
          top: '10px',
          height: 'auto',
          width: 'calc(50px - 20px)',
          right: '10px'
        }
      ],
      [
        'bottom-left with related component overlap',
        'more space is at the left and bottom and tooltip does not fit',
        { top: 20, bottom: 50, left: 50, right: 80 },
        { height: 60, width: 60 },
        {
          height: 'auto',
          width: 'calc(50px - 20px)',
          left: '10px',
          top: '10px'
        }
      ]
    ])(
      'positions tooltip at the %s when there is %s',
      (_c1, _c2, relatedComponentRect, tooltipRect, expectedResult) => {
        // @ts-expect-error mock params does not exactly match DOMRect type
        const result = calculateTooltipPosition(relatedComponentRect, tooltipRect);
        expect(result).toEqual(expectedResult);
      }
    );
  });
});
