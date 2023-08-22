import { usePathname } from 'next/navigation';

import { Navigation, NavLink } from '../../common';

export const HeaderNavigation = () => {
  const pathname = usePathname();

  return (
    <Navigation aria-label="Header Navigation">
      <ul>
        <li>
          <NavLink href="/" className={pathname === '/' ? 'active' : ''}>
            Home
          </NavLink>
        </li>
      </ul>
    </Navigation>
  );
};
