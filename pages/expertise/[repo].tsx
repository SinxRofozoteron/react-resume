import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useDispatch } from '../../src/hooks';

import {
  FileMenu,
  CodeSkillPageHeader,
  CodeEditorAsTourComponent
} from '@/src/components/CodeSkillPage';
import { wrapper, apiWithFetchTree, startTour } from '@/src/state';
import { getGithubDirectory } from '@/src/api/github';

const RepoExplorerPageLayout = styled.main`
  width: 100%;
  margin: 4.5rem auto 0 auto;
  height: calc(100vh - 8.5rem);
  padding: 0 10px 10px 10px;

  @media screen and (min-width: 700px) {
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: max-content 1fr;
    column-gap: 10px;
  }

  @media screen and (min-width: 900px) {
    grid-template-columns: 300px 1fr;
  }
`;

export default function RepoExplorerPage() {
  const { query } = useRouter();
  const dispatch = useDispatch();

  // Start a tour if tour query found
  useEffect(() => {
    if (query.tour) {
      dispatch(startTour(query.tour as string));
    }
  }, [query, dispatch]);

  return (
    <RepoExplorerPageLayout>
      <FileMenu />
      <CodeSkillPageHeader />
      <CodeEditorAsTourComponent />
    </RepoExplorerPageLayout>
  );
}

export const getStaticProps = wrapper.getStaticProps(store => async context => {
  const repo = context.params?.repo as string;

  try {
    const data = await getGithubDirectory(repo);
    const action = apiWithFetchTree.util.upsertQueryData('fetchRepoTree', repo, data);
    await store.dispatch(action);
  } catch (err) {
    console.error(err);
  }

  return {
    props: {}
  };
});

export const getStaticPaths = () => {
  const paths = [{ params: { repo: 'react-resume' } }];

  return {
    paths,
    fallback: false
  };
};
