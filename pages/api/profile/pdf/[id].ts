import type { NextApiRequest, NextApiResponse } from 'next'
import puppeteer from 'puppeteer'

import connectDB from 'lib/mongooseConnect'
import { IProfile } from 'api/models/Profile'

async function handler(req: NextApiRequest, res: NextApiResponse<IProfile>) {
   connectDB()

   const browser = await puppeteer.launch({ headless: true })
   const page = await browser.newPage()
   await page.emulateMediaType('screen')
   await page.goto('http://localhost:3000/profile/' + req.query.id, {
      waitUntil: 'networkidle0',
   })
   console.log('http://localhost:3000/profile/' + req.query.id)
   const photo = await page.pdf({
      printBackground: true,
      format: 'A4',
   })

   await browser.close()

   if (photo) {
      res.setHeader('Content-Type', 'application/pdf')
      res.status(200).send(Buffer.from(photo, 'base64'))
      res.end()
   } else {
      res.status(404).end()
   }
}

export default handler
