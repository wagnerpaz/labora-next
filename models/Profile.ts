import { model, Schema } from 'mongoose'

import registerRetrieveService from 'lib/registerService'

export type IProfile = {
   _id: string
   slug: string
   fullName: string
   nickname: string
   photo?: string
   photoUpdatedAt?: Date
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
   employment: [IEmploymentItem]
}

export type IEmploymentItem = {
   employer: string
   role: string
   start: string
   end?: string
   achievements?: IAchievementItem[]
   knowledge?: IKnowledgeItem[]
}

export type IAchievementItem = {
   description: string
}

export type IKnowledgeItem = {
   description: string
}

const achievementSchema = new Schema<IAchievementItem>({
   description: String,
})

const knowledgeSchema = new Schema<IKnowledgeItem>({
   description: String,
})

const employmentSchema = new Schema<IEmploymentItem>({
   employer: String,
   role: String,
   start: String,
   end: { type: String, required: false },
   achievements: [achievementSchema],
   knowledge: [knowledgeSchema],
})

const schema = new Schema<IProfile>(
   {
      slug: { type: String, required: true },
      fullName: { type: String, required: true },
      nickname: { type: String, required: true },
      photo: { type: String, required: false },
      photoUpdatedAt: { type: Date, required: false },
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
      employment: [employmentSchema],
   },
   {}
)

const Profile = registerRetrieveService('Profile', () =>
   model<IProfile>('profile', schema)
)

export default Profile
