import registerService from 'lib/registerService'
import mongoose from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'

if (!process.env.MONGODB_URL) {
   throw new Error(
      'Please define the MONGODB_URL environment variable inside .env.local'
   )
}

const connectDB = () => {
   // Use new db connection
   registerService('mongooseConnection', async () =>
      mongoose.connect(process.env.MONGODB_URL, () =>
         console.log('MongoDB connection created!')
      )
   )
}

export default connectDB
