import mongoose from 'mongoose'

import connectDB from 'lib/mongooseConnect'
import Profile from 'models/Profile'
import prepareToSerializeJSON from 'lib/prepareToSerializeJSON'
import { TPipeGetServerSideProps } from 'lib/ssrHelpers'

const profileSSR = (): TPipeGetServerSideProps => async (context, input) => {
   connectDB()

   let profile

   profile = await Profile.findOne(
      { slug: context.params.slugOrId },
      { photo: 0 }
   )

   if (!profile) {
      profile = await Profile.findById(context.params.slugOrId as string, {
         photo: 0,
      })
   }

   // merge props and pass down to the next function
   return prepareToSerializeJSON({
      props: {
         ...input.props,
         profile,
      },
   })
}

export default profileSSR
