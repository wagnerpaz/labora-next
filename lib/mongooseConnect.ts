import registerRetrieveService from 'lib/registerService'
import mongoose from 'mongoose'

if (!process.env.MONGODB_URI) {
   throw new Error(
      'Please define the MONGODB_URI environment variable inside .env.local'
   )
}

const connectDB = () => {
   // Use new db connection
   return registerRetrieveService('mongooseConnection', async () =>
      mongoose.connect(process.env.MONGODB_URI, () =>
         console.log('MongoDB connection created!')
      )
   )
}

export default connectDB
