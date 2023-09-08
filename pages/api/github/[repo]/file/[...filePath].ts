import type { NextApiRequest, NextApiResponse } from 'next';

import { getGithubFile } from '@/src/api/github';

export default async function getFile(req: NextApiRequest, res: NextApiResponse) {
  const { filePath, repo } = req.query as { filePath: string[]; repo: string };
  const response = await getGithubFile(repo, filePath.join('/'));

  if (response.data) {
    res.status(response.status).json({
      content: Buffer.from(response.data.content, response.data.encoding).toString(),
      name: response.data.name
    });
  } else {
    res
      .status(response.status)
      .send('Something went wrong, could not get file from GitHub...');
  }
}
