import React from 'react'

import ProfileAboutForm from 'components/forms/ProfileAboutForm'
import { ssrHelpers } from 'lib/ssrHelpers'
import { GetServerSideProps } from 'next'
import themeSSR from 'server-side-props/themeSSR'

const Test = () => {
   return <ProfileAboutForm className="p-4" />
}

export const getServerSideProps: GetServerSideProps = ssrHelpers.pipe(
   themeSSR()
)

export default Test
