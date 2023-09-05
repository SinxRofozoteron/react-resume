import type { NextApiRequest, NextApiResponse } from 'next';

import { getGithubDirectory } from '@/src/api/github';

export default async function getRepoTree(req: NextApiRequest, res: NextApiResponse) {
  const { repo } = req.query as { repo: string };

  try {
    const tree = await getGithubDirectory(repo);
    res.status(200).json(tree);
  } catch (err) {
    console.error('Error happened while trying to fetch github directory tree:', err);

    res.status(500).send('There was an error fetching Github directory tree');
  }
}
