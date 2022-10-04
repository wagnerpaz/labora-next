import type { NextApiRequest, NextApiResponse } from 'next'

import connectDB from 'lib/mongooseConnect'
import Profile, { IProfile } from 'models/Profile'

async function handler(req: NextApiRequest, res: NextApiResponse<IProfile>) {
   connectDB()

   if (req.method === 'PUT') {
      const profile = await Profile.update({ _id: req.query.id }, req.body)
      if (profile) {
         res.status(200).json(profile)
      } else {
         res.status(404).end()
      }
   } else if (req.method === 'GET') {
      const profile = await Profile.findById({ _id: req.query.id })
      if (profile) {
         res.status(200).json(profile)
      } else {
         res.status(404).end()
      }
   }
}

export default handler
