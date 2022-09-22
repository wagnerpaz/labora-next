import type { AppProps } from 'next/app'
import Head from 'next/head'

import { ITheme } from 'api/models/Theme'
import { getRGBColor } from 'lib/getRGBColor'

import '../styles/globals.css'
import { getAccessibleColor } from 'lib/getAccesibleColor'

function MyApp({ Component, pageProps }: AppProps<{ theme: ITheme }>) {
   const { primaryColor, secondaryColorLight, secondaryColorDark } =
      pageProps.theme || {
         primaryColor: '#000',
         secondaryColorLight: '#000',
         secondaryColorDark: '#000',
      }
   const primaryColorVar = getRGBColor(primaryColor, 'primary')
   const primaryColorA11yVar = getRGBColor(
      getAccessibleColor(primaryColor),
      'primary-a11y'
   )
   const secondaryColorLightVar = getRGBColor(
      secondaryColorLight,
      'secondary-light'
   )
   const secondaryColorLightA11yVar = getRGBColor(
      getAccessibleColor(secondaryColorLight),
      'secondary-light-a11y'
   )
   const secondaryColorDarkVar = getRGBColor(
      secondaryColorDark,
      'secondary-dark'
   )
   const secondaryColorDarkA11yVar = getRGBColor(
      getAccessibleColor(secondaryColorDark),
      'secondary-dark-a11y'
   )
   return (
      <>
         <Head>
            <style>
               :root{' '}
               {`{${primaryColorVar}
                 ${primaryColorA11yVar}
                 ${secondaryColorLightVar}
                 ${secondaryColorLightA11yVar}
                 ${secondaryColorDarkVar}
                 ${secondaryColorDarkA11yVar}}
               `}
            </style>
         </Head>
         <Component {...pageProps} />
      </>
   )
}

export default MyApp
