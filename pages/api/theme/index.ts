import type { NextApiRequest, NextApiResponse } from 'next'

import connectDB from 'lib/mongooseConnect'
import Theme, { ITheme } from 'models/Theme'

async function handler(req: NextApiRequest, res: NextApiResponse<ITheme>) {
   connectDB()

   const theme = await Theme.findOne({})
   if (theme) {
      res.status(200).json(theme)
   } else {
      res.status(404).end()
   }
}

export default handler
