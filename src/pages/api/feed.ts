import type { NextApiRequest, NextApiResponse } from 'next';

import { data } from '../../../public/example_data.js';

const feed = data?.feed;

export default function Feed(_req: NextApiRequest, res: NextApiResponse) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(feed));
}
