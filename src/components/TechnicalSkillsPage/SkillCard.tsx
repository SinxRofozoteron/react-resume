import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { SkillHead } from './SkillHead';
import { SkillCardContainer } from './SkillCardContainer';

import plusDarkPng from '@/public/plus-dark.png';
import minusLightPng from '@/public/minus-light.png';
import minusDarkPng from '@/public/minus-dark.png';
import plusLightPng from '@/public/plus-light.png';
import { ThemeName } from '@/src/state/slices';
import { useSelector, useIsWideScreen } from '@/src/hooks';

export type SkillCardProps = {
  name: string;
  link?: string;
  description: string;
  icon?: string;
};

const MainSkillBar = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  border-bottom: solid 1px ${({ theme }) => theme.textColor};
  margin-bottom: 10px;
  svg {
    height: 2rem;
    width: auto;
    flex-shrink: 0;
  }
  svg.icon {
    margin-right: 5px;
  }
  .extender {
    height: 2rem;
    width: auto;
    :hover {
      height: 2.2rem;
    }
  }
  @media screen and (min-width: 985px) {
    border-bottom: none;
    display: block;
    svg {
      height: 4rem;
    }
    .extender {
      display: none;
    }
  }
`;

const Description = styled.p`
  max-height: 0;
  margin: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  color: ${({ theme }) => theme.textColor};
  @media screen and (min-width: 985px) {
    max-height: none;
    margin: 0 10px 10px 10px;
  }
`;

const ToggleButton = styled.button`
  background: none;
  padding: 0;
  border: none;
`;

export const SkillCard = ({ name, link, description, icon }: SkillCardProps) => {
  const theme = useSelector(state => state.view.theme);
  const [expanded, setExpanded] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const isWideScreen = useIsWideScreen();
  console.log(isWideScreen, 'WIDESCREEN');

  const extendHandler = () => {
    setExpanded(state => !state);
  };
  useEffect(() => {
    // Setting max-height of description collapsable here
    // for transition to work
    if (descriptionRef.current && !isWideScreen) {
      const scrollHeight = descriptionRef.current!.scrollHeight;
      if (expanded) {
        descriptionRef.current.style.maxHeight = scrollHeight.toString() + 'px';
      } else {
        descriptionRef.current.style.maxHeight = '0';
      }
    }
  }, [expanded, isWideScreen]);

  return (
    <SkillCardContainer
      isWideScreen={isWideScreen}
      link={link}
      description={description}>
      <MainSkillBar>
        <SkillHead
          name={name}
          asLink={!!link && !isWideScreen}
          link={link}
          iconFile={icon}
        />
        {description ? (
          <ToggleButton
            onClick={extendHandler}
            aria-expanded={expanded ? 'true' : 'false'}>
            <Image
              src={
                theme === ThemeName.light
                  ? expanded
                    ? minusDarkPng
                    : plusDarkPng
                  : expanded
                  ? minusLightPng
                  : plusLightPng
              }
              className="extender"
              alt={expanded ? 'Plus' : 'Minus'}
            />
          </ToggleButton>
        ) : (
          false
        )}
      </MainSkillBar>
      {description ? (
        <Description ref={descriptionRef}>{description}</Description>
      ) : (
        false
      )}
    </SkillCardContainer>
  );
};
