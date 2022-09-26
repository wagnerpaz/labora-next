import themeSSR from 'server-side-props/themeSSR'
import type { NextPage } from 'next'

import { ssrHelpers } from 'lib/ssrHelpers'
import BrandHeader from 'components/BrandHeader'
import profilesSSR from 'server-side-props/profilesSSR'
import { IProfile } from 'models/Profile'
import ProfileThumbnail from 'components/ProfileThumbnail'

const Home: NextPage<Props> = ({ profiles }) => {
   return (
      <>
         <header>
            <BrandHeader />
         </header>
         <div className="flex justify-center items-start bg-secondary-light">
            <div className="container w-full gap-4 shadow-2xl border-t-2 pt-4 bg-white">
               {profiles.map((profile) => (
                  <div className="p-4 bg-white">
                     <ProfileThumbnail profile={profile} />
                  </div>
               ))}
            </div>
         </div>
      </>
   )
}

type Props = {
   profiles: [IProfile]
}

export const getServerSideProps = ssrHelpers.pipe(themeSSR(), profilesSSR())

export default Home
