import connectDB from 'lib/mongooseConnect'
import Profile from 'api/models/Profile'
import prepareToSerializeJSON from 'lib/prepareToSerializeJSON'

export default async (previous) => {
   connectDB()

   const profile = await Profile.findOne({})

   return prepareToSerializeJSON({
      ...previous,
      profile: profile,
   })
}
