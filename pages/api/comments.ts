import comments from '../../helpers/comments.json';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({ post: req.query.id , comments});
}