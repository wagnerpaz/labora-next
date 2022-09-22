import connectDB from 'lib/mongooseConnect'
import Theme from 'api/models/Theme'
import prepareToSerializeJSON from 'lib/prepareToSerializeJSON'

export default async (previous) => {
   connectDB()

   const theme = await Theme.findOne({})

   return prepareToSerializeJSON({
      ...previous,
      theme: theme,
   })
}
