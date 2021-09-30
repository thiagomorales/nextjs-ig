import type { NextApiRequest, NextApiResponse } from 'next';

import { data } from '../../../public/example_data';

const stories = data?.stories;

export default function Stories(_req: NextApiRequest, res: NextApiResponse) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(stories));
}
