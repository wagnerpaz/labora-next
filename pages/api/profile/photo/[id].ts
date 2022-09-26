import type { NextApiRequest, NextApiResponse } from 'next'

import connectDB from 'lib/mongooseConnect'
import Profile from 'api/models/Profile'

async function handler(req: NextApiRequest, res: NextApiResponse) {
   connectDB()

   const profile = await Profile.findById({ _id: req.query.id }, { photo: 1 })
   const { photo } = profile

   if (photo) {
      res.setHeader('Content-Type', 'image/jpeg')
      // @ts-ignore
      res.status(200).send(Buffer.from(photo, 'base64'))
      res.end()
   } else {
      res.status(404).end()
   }
}

export default handler
