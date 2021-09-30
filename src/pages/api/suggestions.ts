import type { NextApiRequest, NextApiResponse } from 'next';

import { data } from '../../../public/example_data.js';

const suggestions = data?.suggestions;

export default function Suggestions(_req: NextApiRequest, res: NextApiResponse) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(suggestions));
}
