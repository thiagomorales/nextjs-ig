import type { NextApiRequest, NextApiResponse } from 'next';

import { data } from '../../../public/example_data';

const loginUser = data?.loginUser;

export default function LoginUser(_req: NextApiRequest, res: NextApiResponse) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(loginUser));
}
