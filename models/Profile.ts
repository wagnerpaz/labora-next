import { model, Schema } from 'mongoose'

import registerService from 'lib/registerService'

export type IProfile = {
   _id: string
   fullName: string
   nickname: string
   photo?: string
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
   education: [
      {
         title: string
         start: string
         end: string
         institution: string
         address: {
            country: string
            state: string
            city: string
         }
      }
   ]
   employment: [
      {
         employer: string
         role: string
         start: string
         end?: string
         achievements?: [string]
         knowledge?: [string]
      }
   ]
}

const schema = new Schema<IProfile>({
   fullName: { type: String, required: true },
   nickname: { type: String, required: true },
   photo: { type: String, required: false },
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
   education: [
      {
         title: String,
         start: String,
         end: { type: String, required: false },
         institution: String,
         address: {
            country: String,
            state: String,
            city: String,
         },
      },
   ],
   employment: [
      {
         employer: String,
         role: String,
         start: String,
         end: { type: String, required: false },
         achievements: { type: [String], required: false },
         knowledge: { type: [String], required: false },
      },
   ],
})

const Profile = registerService('Profile', () =>
   model<IProfile>('profile', schema)
)

export default Profile
