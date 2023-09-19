import { calculateTooltipPosition } from '../TourTooltip.utils';

describe('TourTooltip utils', () => {
  describe('calculateTooltipPosition', () => {
    Object.defineProperty(window, 'innerHeight', { value: 100 });
    Object.defineProperty(window, 'innerWidth', { value: 100 });

    it.each([
      [
        'left',
        'more space is at the left and tooltip fits',
        { top: 50, bottom: 80, left: 60, right: 80, width: 20, height: 30 },
        { height: 10, width: 10 },
        {
          right: '40px',
          top: '60px',
          '&:after': {
            borderBottom: '2.5px solid transparent !important',
            borderLeft: '10px solid',
            borderTop: '2.5px solid transparent !important',
            content: '""',
            height: '0px',
            position: 'absolute',
            transform: 'translateY(-50%)',
            width: '0px',
            left: 'calc(100% + 6px)',
            top: '50%'
          }
        }
      ],
      [
        'top',
        'more space is at the top and tooltip fits',
        { top: 60, bottom: 80, left: 20, right: 50, width: 30, height: 20 },
        { height: 10, width: 10 },
        {
          bottom: '40px',
          left: '30px',
          '&:after': {
            borderLeft: '2.5px solid transparent !important',
            borderTop: '10px solid',
            borderRight: '2.5px solid transparent !important',
            content: '""',
            height: '0px',
            position: 'absolute',
            transform: 'translateX(-50%)',
            width: '0px',
            top: 'calc(100% + 6px)',
            left: '50%'
          }
        }
      ],
      [
        'right',
        'more space is at the right and tooltip fits',
        { top: 20, bottom: 50, left: 20, right: 40, height: 30, width: 20 },
        { height: 10, width: 10 },
        {
          left: '40px',
          top: '30px',
          '&:after': {
            borderBottom: '2.5px solid transparent !important',
            borderRight: '10px solid',
            borderTop: '2.5px solid transparent !important',
            content: '""',
            height: '0px',
            position: 'absolute',
            transform: 'translateY(-50%)',
            width: '0px',
            right: 'calc(100% + 6px)',
            top: '50%'
          }
        }
      ],
      [
        'bottom',
        'more space is at the bottom and tooltip fits',
        { top: 20, bottom: 40, left: 50, right: 80, height: 20, width: 30 },
        { height: 10, width: 10 },
        {
          top: '40px',
          left: '60px',
          '&:after': {
            borderBottom: '10px solid',
            borderLeft: '2.5px solid transparent !important',
            borderRight: '2.5px solid transparent !important',
            bottom: 'calc(100% + 6px)',
            content: '""',
            height: '0px',
            left: '50%',
            position: 'absolute',
            transform: 'translateX(-50%)',
            width: '0px'
          }
        }
      ],
      [
        'left with related component overlap',
        'more space is to the left and tooltip does not fit',
        { top: 50, bottom: 80, left: 60, right: 80, height: 30, width: 20 },
        { height: 60, width: 60 },
        {
          bottom: '0px',
          left: '0px',
          top: '0px',
          '&:after': {
            content: '""',
            height: '0px',
            position: 'absolute',
            width: '0px'
          }
        }
      ],
      [
        'top with related component overlap',
        'more space is at the top and tooltip does not fit',
        { top: 60, bottom: 80, left: 50, right: 80, height: 20, width: 30 },
        { height: 60, width: 60 },
        {
          left: '0px',
          right: '0px',
          top: '0px',
          '&:after': {
            content: '""',
            height: '0px',
            position: 'absolute',
            width: '0px'
          }
        }
      ],
      [
        'right with related component overlap',
        'more space is at the right and tooltip does not fit',
        { top: 50, bottom: 80, left: 20, right: 40, height: 30, width: 20 },
        { height: 60, width: 60 },
        {
          bottom: '0px',
          right: '0px',
          top: '0px',
          '&:after': {
            content: '""',
            height: '0px',
            position: 'absolute',
            width: '0px'
          }
        }
      ],
      [
        'bottom with related component overlap',
        'more space is at the bottom and tooltip does not fit',
        { top: 20, bottom: 50, left: 40, right: 80, height: 30, width: 40 },
        { height: 60, width: 60 },
        {
          bottom: '0px',
          left: '0px',
          right: '0px',
          '&:after': {
            content: '""',
            height: '0px',
            position: 'absolute',
            width: '0px'
          }
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
