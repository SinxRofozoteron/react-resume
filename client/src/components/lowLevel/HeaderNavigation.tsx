import { FC } from "react";
import styled from "styled-components";

import headerLinkStyle from "../../styles/navLinkStyle";
import NavLink from "../models/NavLink";
import { AuthButton } from "./AuthButton";
import Divider from "../models/Divider";

const StyledNav = styled.nav.attrs(() => ({
  "aria-label": "Header Navigation"
}))`
  height: 100%;
  padding: 0;
  margin-right: 20px;
  display: inline-block;
  ul {
      margin: 0;
      padding: 0;
      height: 100%;
      display: flex;
      list-style-position: none;
      justify-content: flex-end;
      align-items: center;
    }
  li {
      font-size: 1.80rem;
      display: inline-block;
  }
  button {
    ${headerLinkStyle};
  }
`;
const VDivider = <Divider height="70%" verticalMargin="auto" orientation="vertical" />;

const HeaderNav: FC = () => {
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