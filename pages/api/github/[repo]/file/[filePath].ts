import type { NextApiRequest, NextApiResponse } from 'next';

import { getGithubFile } from '@/src/api/github';

export default async function getFile(req: NextApiRequest, res: NextApiResponse) {
  const { filePath, repo } = req.query as { filePath: string; repo: string };
  const response = await getGithubFile(repo, filePath);

  res
    .status(response.status)
    .send(
      JSON.stringify(
        response.data
          ? Buffer.from(response.data.content, response.data.encoding).toString()
          : 'Something went wrong, could not get file from GitHub...'
      )
    );
}
