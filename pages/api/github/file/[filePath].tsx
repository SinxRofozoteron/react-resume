import type { NextApiRequest, NextApiResponse } from 'next';

import { getGithubFile } from '@/src/api/github';

export default async function getFile(req: NextApiRequest, res: NextApiResponse) {
  const { filePath } = req.query as { filePath: string };
  const response = await getGithubFile(filePath);

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
