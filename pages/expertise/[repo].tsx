import styled from 'styled-components';

import { FileMenu } from '@/src/components/CodeSkillPage/FileMenu';
import { wrapper, apiWithFetchTree } from '@/src/state';
import { getGithubDirectory } from '@/src/api/github';

const RepoExplorerPageLayout = styled.main`
  width: 100%;
  margin: 4.5rem auto 0 auto;
  height: calc(100vh - 8.5rem);
  padding: 0 10px 10px 10px;

  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: 200px 1fr;
  }

  @media screen and (min-width: 900px) {
    grid-template-columns: 300px 1fr;
  }
`;

export default function RepoExplorerPage() {
  return (
    <RepoExplorerPageLayout>
      <FileMenu />
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
