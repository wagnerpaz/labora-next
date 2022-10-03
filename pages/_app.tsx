import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'

import { ITheme } from 'models/Theme'
import { getRGBColor } from 'lib/getRGBColor'
import { getAccessibleColor } from 'lib/getAccesibleColor'
import { UserProvider } from 'context/UserContext'

import '../styles/globals.css'

function MyApp({
   Component,
   pageProps: { session, theme, ...pageProps },
}: AppProps<{ theme: ITheme; session: Session }>) {
   const { primaryColor, secondaryColorLight, secondaryColorDark } = theme || {
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
         <SessionProvider session={session}>
            <UserProvider>
               <Component {...{ ...pageProps, theme }} />
            </UserProvider>
         </SessionProvider>
      </>
   )
}

export default MyApp
