import { render, screen } from '@testing-library/react';

import { CodeSkillPageHeader } from '../CodeSkillPageHeader';

import { TestWrapper } from '@/src/testUtils';

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: () => ({
    query: {
      repo: 'test-repo'
    }
  })
}));

describe('<CodeSkillPageHeader />', () => {
  it('renders repo name from url as title', () => {
    render(<CodeSkillPageHeader />, { wrapper: TestWrapper });

    const heading = screen.getByRole('heading');
    expect(heading).toHaveTextContent('test repo');
  });
});
