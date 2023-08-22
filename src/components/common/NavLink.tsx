import Link from 'next/link';
import styled from 'styled-components';

import { navLinkStyle } from '@/src/styles';

export const NavLink = styled(Link)`
  ${navLinkStyle};
  &.active {
    // use underline for active NavLink
    text-decoration: underline;
  }
`;
