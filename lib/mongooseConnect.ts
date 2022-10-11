import registerRetrieveService from 'lib/registerService'
import mongoose from 'mongoose'

if (!process.env.MONGODB_URL) {
   throw new Error(
      'Please define the MONGODB_URL environment variable inside .env.local'
   )
}

const connectDB = () => {
   // Use new db connection
   return registerRetrieveService('mongooseConnection', async () =>
      mongoose.connect(process.env.MONGODB_URL, () =>
         console.log('MongoDB connection created!')
      )
   )
}

export default connectDB
