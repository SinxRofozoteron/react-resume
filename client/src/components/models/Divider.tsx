import styled, { css } from "styled-components";

export interface DividerProps {
  width?: string;
  height?: string;
  color?: string;
  horizontalMargin?: string;
  verticalMargin?: string;
  orientation: "vertical" | "horizontal"
}

const Divider = styled(
  ({ height, color, width, horizontalMargin, verticalMargin, orientation, ...props }) => <div {...props} />
).attrs((props: DividerProps) => ({
  role: "separator",
  "aria-orientation": props.orientation
})) <DividerProps>`
  ${({ theme, height, color, width, horizontalMargin, verticalMargin, orientation }) => {
    if (orientation === "vertical") {
      return css`
        border-left: ${width ? width : "1px"} solid ${color ? color : theme.textColor};
        height: ${height ? height : "1.5em"};
        margin: ${verticalMargin ? verticalMargin : "0"} ${horizontalMargin ? horizontalMargin : "10px"};
      `;
    } else if (orientation === "horizontal") {
      return css`
        border-bottom: ${height ? height : "1px"} solid ${color ? color : theme.textColor};
        width: ${width ? width : "100%"};
        margin: ${verticalMargin ? verticalMargin : "10px"} ${horizontalMargin ? horizontalMargin : "0"};
       `;
    } else {
      throw new Error(
        `Divider component requires orientation prop to have either \
        'horizontal' or 'vertical' value, not ${orientation}`
      )
    }
  }
  }
  `;

export default Divider;
