import styled from 'styled-components';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navLinkStyle } from '@/src/styles';

const NavLink = styled(Link)`
  ${navLinkStyle};
  &.active {
    // use underline for active NavLink
    text-decoration: underline;
  }
`;

const StyledNav = styled.nav.attrs(() => ({
  'aria-label': 'Header Navigation'
}))`
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
    ${navLinkStyle};
  }
`;

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <StyledNav>
      <ul>
        <li>
          <NavLink href="/" className={pathname === '/' ? 'active' : ''}>
            Home
          </NavLink>
        </li>
      </ul>
    </StyledNav>
  );
};
