import type { NextApiRequest, NextApiResponse } from 'next'

import connectDB from 'lib/mongooseConnect'
import Profile, { IProfile } from 'models/Profile'

async function handler(req: NextApiRequest, res: NextApiResponse<IProfile>) {
   connectDB()

   const profile = await Profile.findOne({ owner: req.query.owner })
   if (profile) {
      res.status(200).json(profile)
   } else {
      res.status(404).end()
   }
}

export default handler
