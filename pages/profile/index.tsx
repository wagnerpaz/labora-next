import type { NextPage } from 'next'
import { pipeProps } from 'next-pipe-props'
import { MdLocationPin, MdPhone, MdEmail } from 'react-icons/md'

import themeStaticProps from 'static-props/themeStaticProps'
import profileStaticProps from 'static-props/profileStaticProps'
import { IProfile } from 'api/models/Profile'
import Chip from 'components/Chip'

const Profile: NextPage<Props> = ({ profile }) => {
   return (
      <div className="w-full h-full">
         <header className="text-primary-a11y bg-[url('/images/vecteezy_geometric-pattern-technology-green-background_4689400.jpg')]">
            <div className="bg-primary bg-opacity-25">
               <address className="flex justify-center items-start py-2.5 not-italic h-48">
                  <ul className="container flex flex-row space-x-4">
                     <li className="flex flex-row items-center space-x-2">
                        <MdLocationPin />
                        <span>
                           {profile.addresses.residential.country}
                           {', '}
                           {profile.addresses.residential.city}
                           {' - '}
                           {profile.addresses.residential.state}
                        </span>
                     </li>

                     <li className="flex flex-row items-center space-x-2">
                        <MdPhone />
                        <span>{profile.addresses.phoneNumber}</span>
                     </li>

                     <li className="flex flex-row items-center space-x-2">
                        <MdEmail />
                        <span>{profile.addresses.email}</span>
                     </li>
                  </ul>
               </address>
            </div>
         </header>
         <div className="flex justify-center items-start my-2.5">
            <main className="container flex flex-row -mt-40 bg-white shadow-xl rounded-lg p-8 gap-8">
               <div className="bg-[url('/images/professional-me.jpeg')] w-[300px] h-[300px] bg-cover rounded-sm shrink-0" />
               <div className="flex flex-col min-h-[300px] justify-between">
                  <div className="flex flex-col">
                     <span className="text-3xl">{profile.fullName}</span>
                     <span className="text-xl opacity-50">
                        {profile.profession}
                     </span>
                     <p className="mt-8">{profile.about}</p>
                  </div>
                  <ul className="flex flex-col gap-2 flex-wrap mt-8">
                     <div className="flex gap-1">
                        {profile.experience
                           .filter((ex) => ex.highlight)
                           .map((ex) => (
                              <Chip
                                 key={ex.name}
                                 name={ex.name}
                                 count={ex.years}
                                 highlight
                              />
                           ))}
                     </div>
                     <div className="flex gap-1">
                        {profile.experience
                           .filter((ex) => !ex.highlight)
                           .map((ex) => (
                              <Chip
                                 key={ex.name}
                                 name={ex.name}
                                 count={ex.years}
                              />
                           ))}
                     </div>
                  </ul>
               </div>
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
