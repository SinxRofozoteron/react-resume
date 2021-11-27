import styled from "styled-components";

import headerLinkStyle from "../../styles/navLinkStyle";

const StyledNav = styled.nav`
  height: 100%;
  padding: 0;
  margin-right: 20px;
  display: inline-block;
  > ul {
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    list-style-position: none;
    justify-content: flex-end;
    align-items: center;
  }
  > ul > li {
    font-size: 1.8rem;
    display: inline-block;
  }
  button {
    ${headerLinkStyle};
  }
`;

export default StyledNav;
