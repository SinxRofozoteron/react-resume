import styled, { css } from "styled-components";

interface VDividerProps {
  width?: string;
  height?: string;
  color?: string;
  horizontalMargin?: string;
  verticalMargin?: string;
}

const Divider = styled.div.attrs(() => ({
  role: "separator",
  "aria-orientation": "vertical"
})) <VDividerProps>`
  display: inline-block;
  ${({ theme, height, color, width, horizontalMargin, verticalMargin }) => css`
      border-left: ${width ? width : "1px"} solid ${color ? color : theme.textColor};
      height: ${height ? height : "1.5em"};
      margin: ${verticalMargin ? verticalMargin : "0"} ${horizontalMargin ? horizontalMargin : "10px"};
    `
  }
  `;

export default Divider;
