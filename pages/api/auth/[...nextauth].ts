import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import connectDB from 'lib/mongooseConnect'
import mongoose from 'mongoose'

import 'models/User'

connectDB()

export const authOptions = {
   // Configure one or more authentication providers
   providers: [
      GithubProvider({
         clientId: process.env.GITHUB_ID,
         clientSecret: process.env.GITHUB_SECRET,
      }),
      // ...add more providers here
   ],
   adapter: MongoDBAdapter(
      new Promise((resolve) => resolve(mongoose.connection.getClient()))
   ),
   callbacks: {
      async session({ session, user }) {
         return Promise.resolve({
            ...session,
            user: {
               ...session.user,
               ...user,
            },
         })
      },
   },
}

export default NextAuth(authOptions)
