import connectDB from 'lib/mongooseConnect'
import Theme from 'api/models/Theme'
import prepareToSerializeJSON from 'lib/prepareToSerializeJSON'
import { TPipeGetServerSideProps } from 'lib/ssrHelpers'

const themeSSR = (): TPipeGetServerSideProps => async (context, input) => {
   connectDB()

   const theme = await Theme.findOne({})

   // merge props and pass down to the next function
   return prepareToSerializeJSON({
      props: {
         ...input.props,
         theme,
      },
   })
}

export default themeSSR
