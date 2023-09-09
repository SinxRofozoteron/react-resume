import { usePathname } from 'next/navigation';

import { Navigation, NavLink, Divider } from '../../common';

export const HeaderNavigation = () => {
  const pathname = usePathname();

  return (
    <Navigation aria-label="Header Navigation">
      <ul>
        <li>
          <NavLink
            href="/expertise/react-resume"
            className={pathname === '/expertise/react-resume' ? 'active' : ''}>
            Code
          </NavLink>
        </li>
        <Divider height="70%" verticalMargin="auto" orientation="vertical" />
        <li>
          <NavLink href="/" className={pathname === '/' ? 'active' : ''}>
            Home
          </NavLink>
        </li>
      </ul>
    </Navigation>
  );
};
