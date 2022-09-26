import mongoose from 'mongoose'

import connectDB from 'lib/mongooseConnect'
import Profile from 'models/Profile'
import prepareToSerializeJSON from 'lib/prepareToSerializeJSON'
import { TPipeGetServerSideProps } from 'lib/ssrHelpers'

const profileSSR = (): TPipeGetServerSideProps => async (context, input) => {
   connectDB()

   const profile = await Profile.findById(context.params.id as string, {
      photo: 0,
   })

   // merge props and pass down to the next function
   return prepareToSerializeJSON({
      props: {
         ...input.props,
         profile,
      },
   })
}

export default profileSSR
