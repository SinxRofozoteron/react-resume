import styled from "styled-components";

import Divider from "../models/Divider";
import Nav from "../models/MainNav";
import NavLink from "../models/NavLink";
import { AuthButton } from "./AuthButton";

const StyledNav = styled(Nav).attrs(() => ({
  "aria-label": "Header Navigation"
}))``;
const VDivider = <Divider height="70%" verticalMargin="auto" orientation="vertical" />;

const HeaderNav: React.FC = () => {
  return (
    <StyledNav >
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {VDivider}
        <li>
          <AuthButton />
        </li>
      </ul>
    </StyledNav>
  );
};

export default HeaderNav;