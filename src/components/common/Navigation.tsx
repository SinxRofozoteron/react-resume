import styled from 'styled-components';

import { navLinkStyle } from '@/src/styles';

export const Navigation = styled.nav`
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
    font-size: 1.5rem;
    display: inline-block;
  }
  button {
    ${navLinkStyle};
  }

  @media screen and (min-width: 400px) {
    > ul > li {
      font-size: 1.8rem;
      display: inline-block;
    }
  }
`;
