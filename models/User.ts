import mongoose, { model } from 'mongoose'
import type { AdapterUser } from 'next-auth/adapters'

import registerRetrieveService from 'lib/registerService'

const schema = new mongoose.Schema<AdapterUser>({
   name: {
      type: String,
      trim: true,
   },
   email: {
      type: String,
      trim: true,
   },
   emailVerified: {
      type: Date,
      trim: true,
   },
   image: {
      type: String,
      trim: true,
   },
   role: {
      type: String,
      trim: true,
   },
})

const User = registerRetrieveService('User', () =>
   model<AdapterUser>('user', schema)
)

export default User
