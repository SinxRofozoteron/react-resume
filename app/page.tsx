'use client';
import styled from 'styled-components';

import { MainPhoto, UpperLinkToSkills, Article } from '@/src/components/HomePage';

const HomePageLayout = styled.main`
  width: 100%;
  margin: 4.5rem auto 0 auto;
  max-width: 1250px;
  .container {
    position: relative;
  }
`;

export default function HomePage() {
  return (
    <HomePageLayout>
      <div className="container">
        <UpperLinkToSkills />
        <MainPhoto />
      </div>
      <Article />
    </HomePageLayout>
  );
}
