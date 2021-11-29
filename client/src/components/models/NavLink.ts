import styled from "styled-components";
import { NavLink } from "react-router-dom";

import headerLinkStyle from "../../styles/navLinkStyle";

const StyledNavLink = styled(NavLink).attrs((props) => {
  return {
    // selected is active class name for NavLink component
    activeClassName: "selected",
    exact: true,
    className: props.className,
  };
})`
  ${headerLinkStyle};
  &.selected {
    // use underline for active NavLink
    text-decoration: underline;
  }
`;

export default StyledNavLink;
