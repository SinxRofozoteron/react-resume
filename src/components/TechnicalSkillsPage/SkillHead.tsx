import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import Link from 'next/link';
import Image from 'next/image';

import { navLinkStyle } from '@/src/styles';

// type SkillIcon = typeof DefaultSkillIcon;

// const icons = {
//   React: ReactIcon,
//   JavaScript: JSIcon,
//   Python: PythonIcon,
//   Redux: ReduxIcon,
//   TypeScript: TSIcon,
//   HTML: HTMLIcon,
//   CSS: CSSIcon,
//   XML: XMLIcon,
//   JSON: JSONIcon,
//   SQL: SQLIcon,
//   'Selenium WebDriver': SeleniumIcon,
//   'Windows OS': WindowsIcon,
//   macOS: MacOsIcon,
//   JIRA: JiraIcon,
//   GIT: GITIcon,
//   Webpack: WebpackIcon,
//   'Quality Assurance': QAIcon,
//   'Node JS': NodeJsIcon
// };

type SkillHeadProps = {
  name: string;
  iconFile?: string;
  link?: string | false;
  asLink?: boolean;
};

const SkillHeadContainer = styled.div<{ href?: string }>`
  display: flex;
  align-items: center;
  @media screen and (min-width: 985px) {
    align-items: flex-start;
  }
  margin-bottom: 10px;
  text-decoration: none;
`;

const StyledHeading = styled.h3<{ withLinkStyle?: boolean }>`
  ${({ withLinkStyle }) =>
    withLinkStyle
      ? css`
          ${navLinkStyle}
          text-decoration: underline;
        `
      : false};
  margin: 0;
  font-size: 1.5rem;
  @media screen and (min-width: 530px) {
    font-size: 1.75rem;
  }
  @media screen and (min-width: 680px) {
    font-size: 2.05rem;
  }
  @media screen and (min-width: 985px) {
    position: relative;
    left: -25px;
    bottom: -30px;
    background-color: ${({ theme }) => transparentize(0.2, theme.secondaryColor)};
  }
`;

export const SkillHead = ({
  name,
  link,
  asLink,
  iconFile = 'default'
}: SkillHeadProps) => {
  const linkProps = {
    href: link as string,
    as: Link
  };
  return (
    <SkillHeadContainer {...(asLink && link ? linkProps : null)}>
      <Image src={`/skill-${iconFile}.svg`} alt={name} width={60} height={60} />
      <StyledHeading withLinkStyle={Boolean(link)}>{name}</StyledHeading>
    </SkillHeadContainer>
  );
};
