import mongoose from 'mongoose'

import connectDB from 'lib/mongooseConnect'
import Profile from 'models/Profile'
import prepareToSerializeJSON from 'lib/prepareToSerializeJSON'
import { TPipeGetServerSideProps } from 'lib/ssrHelpers'

const profilesSSR = (): TPipeGetServerSideProps => async (context, input) => {
   connectDB()

   const profiles = await Profile.find(
      {},
      {
         photo: 0,
      }
   )

   // merge props and pass down to the next function
   return prepareToSerializeJSON({
      props: {
         ...input.props,
         profiles: profiles,
      },
   })
}

export default profilesSSR
