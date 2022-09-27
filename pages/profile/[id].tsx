import type { GetServerSideProps, NextPage } from 'next'
import { MdHomeWork } from 'react-icons/md'
import { FaGraduationCap } from 'react-icons/fa'
import classNames from 'classnames'

import themeSSR from 'server-side-props/themeSSR'
import profileSSR from 'server-side-props/profileSSR'
import { IProfile } from 'models/Profile'
import Location from 'components/Location'
import Phone from 'components/Phone'
import ProfileAbout from 'components/ProfileAbout'
import Email from 'components/Email'
import SocialMediaIconLink from 'components/SocialMediaIconLink'
import { ssrHelpers } from 'lib/ssrHelpers'
import { ITheme } from 'models/Theme'
import BrandHeader from 'components/BrandHeader'

const ProfilePage: NextPage<Props> = ({
   theme,
   profile,
   noCardOverflowAuto = true,
}) => {
   return (
      <div className="w-full h-full">
         <header>
            <BrandHeader />
            <div className="text-primary-a11y bg-primary">
               <address className="not-italic flex justify-center items-start py-2.5 h-48">
                  <div className="container flex flex-row justify-between space-x-4 print:px-4">
                     <ul className="flex flex-row space-x-4">
                        <Location profile={profile} />
                        <Phone profile={profile} />
                        <Email profile={profile} />
                     </ul>
                     {profile.addresses?.socialMedia && (
                        <ul className="flex flex-row space-x-4 print:hidden">
                           {Object.keys(profile.addresses.socialMedia).map(
                              (smKey) => (
                                 <SocialMediaIconLink
                                    key={smKey}
                                    socialMediaName={smKey}
                                    address={
                                       profile.addresses.socialMedia[smKey]
                                    }
                                 />
                              )
                           )}
                        </ul>
                     )}
                  </div>
               </address>
            </div>
         </header>
         <div className="my-2.5">
            <main className="m-auto container -mt-40 bg-white shadow-xl print:shadow-none rounded-lg print:rounded-none p-8 pr-0 gap-8 min-h-[calc(100vh-5rem)]">
               <div
                  className={classNames(
                     'h-full pr-8 scrollbar-thin scrollbar-thumb-secondary-light scrollbar-track-gray-100 scrollbar-thumb-rounded-md',
                     { 'overflow-auto': !noCardOverflowAuto }
                  )}
               >
                  <ProfileAbout profile={profile} />
                  {profile.education && (
                     <div className="mt-8 flex items-start">
                        <div className="flex items-start mb-8 w-[300px] shrink-0">
                           <FaGraduationCap
                              color={theme.secondaryColorDark}
                              size={32}
                           />
                           <span className="text-3xl ml-2">Education</span>
                        </div>
                        {profile.education?.map((ed) => (
                           <div className="ml-8">
                              <span className="text-xl">{ed.title}</span>
                              {` `}
                              <span>
                                 {ed.start} - {ed.end}
                              </span>
                              <span className="block opacity-50">
                                 {ed.institution} - {ed.address.country},{' '}
                                 {ed.address.city} - {ed.address.state}
                              </span>
                           </div>
                        ))}
                     </div>
                  )}
                  {profile.employment?.length > 0 && (
                     <div className="mt-8 flex items-start">
                        <div className="flex items-center mb-8 w-[300px] shrink-0">
                           <MdHomeWork
                              color={theme.secondaryColorDark}
                              size={32}
                           />
                           <span className="text-3xl ml-2">Employment</span>
                        </div>
                        <ul className="list-disc ml-8 mt-0">
                           {profile.employment.map((empl) => (
                              <li key={empl.employer} className="mb-6">
                                 <span className="block text-xl">
                                    {empl.role}
                                 </span>
                                 <span className="block text-base">
                                    {empl.employer} • {empl.start} -
                                    {empl.end ? empl.end : 'PRESENT'}
                                 </span>
                                 <ul className="ml-8 list-circle mt-2">
                                    {empl.achievements.map((achv) => (
                                       <li
                                          className="print:break-inside-avoid"
                                          key={achv}
                                       >
                                          {achv}
                                       </li>
                                    ))}
                                 </ul>
                                 <span className="inline-block mt-2 opacity-50">
                                    Stack:{' '}
                                    <ul className="inline">
                                       {empl.knowledge.map((k, index) => (
                                          <span key={k}>
                                             <li className="inline-block">
                                                {k}
                                             </li>
                                             {index !==
                                                empl.knowledge.length - 1 &&
                                                ', '}
                                          </span>
                                       ))}
                                    </ul>
                                 </span>
                              </li>
                           ))}
                        </ul>
                     </div>
                  )}
               </div>
            </main>
         </div>
      </div>
   )
}

type Props = {
   theme: ITheme
   profile: IProfile
   noCardOverflowAuto: boolean
}

export const getServerSideProps: GetServerSideProps = ssrHelpers.pipe(
   themeSSR(),
   profileSSR()
)

export default ProfilePage
