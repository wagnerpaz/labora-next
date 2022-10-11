import { model, Schema } from 'mongoose'

import registerRetrieveService from 'lib/registerService'

export type ITheme = {
   primaryColor: string
   secondaryColorLight: string
   secondaryColorDark: string
}

const themeSchema = new Schema<ITheme>({
   primaryColor: { type: String, required: true },
   secondaryColorLight: { type: String, required: true },
   secondaryColorDark: { type: String, required: true },
})

const Theme = registerRetrieveService('Theme', () =>
   model<ITheme>('theme', themeSchema, 'theme')
)

export default Theme
