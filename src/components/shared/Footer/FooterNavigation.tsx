import { usePathname } from 'next/navigation';

import { Navigation } from '../../common';
import { NavLink } from '../../common';
import { Divider } from '../../common/Divider';
import { ContactInfoBtn } from './ContactInfoButton';

const VDivider = <Divider height="70%" verticalMargin="auto" orientation="vertical" />;

export const FooterNavigation = () => {
  const pathname = usePathname();

  return (
    <Navigation aria-label="Footer Navigation">
      <ul>
        <li>
          <NavLink href="/" className={pathname === '/' ? 'active' : ''}>
            Home
          </NavLink>
        </li>
        {VDivider}
        <li>
          <ContactInfoBtn />
        </li>
      </ul>
    </Navigation>
  );
};
