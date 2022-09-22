import type { NextPage } from 'next'
import { pipeProps } from 'next-pipe-props'
import { MdLocationPin, MdPhone, MdEmail } from 'react-icons/md'

import themeStaticProps from 'static-props/themeStaticProps'
import profileStaticProps from 'static-props/profileStaticProps'
import { IProfile } from 'api/models/Profile'
import Location from 'components/Location'
import Phone from 'components/Phone'
import ProfileAbout from 'components/ProfileAbout'
import Email from 'components/Email'
import SocialMediaIconLink from 'components/SocialMediaIconLink'

const Profile: NextPage<Props> = ({ profile }) => {
   return (
      <div className="w-full h-full">
         <header className="text-primary-a11y bg-[url('/images/vecteezy_geometric-pattern-technology-green-background_4689400.jpg')]">
            <div className="bg-primary bg-opacity-25">
               <address className="not-italic flex justify-center items-start py-2.5 h-48">
                  <div className="container flex flex-row justify-between space-x-4">
                     <ul className="flex flex-row space-x-4">
                        <Location profile={profile} />
                        <Phone profile={profile} />
                        <Email profile={profile} />
                     </ul>
                     <ul className="flex flex-row space-x-4">
                        {Object.keys(profile.addresses.socialMedia).map(
                           (smKey) => (
                              <SocialMediaIconLink
                                 socialMediaName={smKey}
                                 address={profile.addresses.socialMedia[smKey]}
                              />
                           )
                        )}
                     </ul>
                  </div>
               </address>
            </div>
         </header>
         <div className="flex justify-center items-start my-2.5">
            <main className="container -mt-40 bg-white shadow-xl rounded-lg p-8 gap-8">
               <ProfileAbout profile={profile} />
            </main>
         </div>
      </div>
   )
}

type Props = {
   profile: IProfile
}

export const getStaticProps = pipeProps(themeStaticProps, profileStaticProps)

export default Profile
