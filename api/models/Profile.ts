import { model, Schema } from 'mongoose'

import registerService from 'lib/registerService'

export type IProfile = {
   fullName: string
   nickname: string
   profession: string
   about?: string
   addresses: {
      residential?: {
         country: string
         state: string
         city: string
      }
      socialMedia: {
         facebook?: string
         instagram?: string
         linkedin?: string
         github?: string
         stackoverflow?: string
      }
      email: string
      phoneNumber?: string
   }
   experience: [
      {
         name: string
         years: number
         highlight: boolean
      }
   ]
}

const schema = new Schema<IProfile>({
   fullName: { type: String, required: true },
   nickname: { type: String, required: true },
   profession: { type: String, required: true },
   about: { type: String, required: false },
   addresses: {
      residential: {
         country: { type: String, required: true },
         state: { type: String, required: true },
         city: { type: String, required: true },
      },
      socialMedia: {
         facebook: { type: String, required: false },
         instagram: { type: String, required: false },
         linkedin: { type: String, required: false },
         github: { type: String, required: false },
         stackoverflow: { type: String, required: false },
      },
      email: { type: String, required: true },
      phoneNumber: { type: String, required: false },
   },
   experience: [
      {
         name: String,
         years: Number,
         highlight: Boolean,
      },
   ],
})

const Profile = registerService('Profile', () =>
   model<IProfile>('profile', schema)
)

export default Profile
