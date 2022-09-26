import type { GetServerSideProps, NextPage } from 'next'
import { MdHomeWork } from 'react-icons/md'
import classNames from 'classnames'

import themeStaticProps from 'server-side-props/themeSSR'
import profileStaticProps from 'server-side-props/profileSSR'
import { IProfile } from 'models/Profile'
import Location from 'components/Location'
import Phone from 'components/Phone'
import ProfileAbout from 'components/ProfileAbout'
import Email from 'components/Email'
import SocialMediaIconLink from 'components/SocialMediaIconLink'
import { ssrHelpers } from 'lib/ssrHelpers'
import { ITheme } from 'models/Theme'

const ProfilePage: NextPage<Props> = ({
   theme,
   profile,
   noCardOverflowAuto = true,
}) => {
   return (
      <div className="w-full h-full">
         <header className="text-primary-a11y bg-[url('/images/vecteezy_geometric-pattern-technology-green-background_4689400.jpg')]">
            <div className="bg-primary bg-opacity-25">
               <address className="not-italic flex justify-center items-start py-2.5 h-48">
                  <div className="container flex flex-row justify-between space-x-4 print:px-4">
                     <ul className="flex flex-row space-x-4">
                        <Location profile={profile} />
                        <Phone profile={profile} />
                        <Email profile={profile} />
                     </ul>
                     <ul className="flex flex-row space-x-4 print:hidden">
                        {Object.keys(profile.addresses.socialMedia).map(
                           (smKey) => (
                              <SocialMediaIconLink
                                 key={smKey}
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
         <div className="my-2.5">
            <main className="m-auto container -mt-40 bg-white shadow-xl print:shadow-none rounded-lg print:rounded-none p-8 pr-0 gap-8 min-h-[calc(100vh-5rem)]">
               <div
                  className={classNames(
                     'h-full pr-8 scrollbar-thin scrollbar-thumb-secondary-light scrollbar-track-gray-100 scrollbar-thumb-rounded-md',
                     { 'overflow-auto': !noCardOverflowAuto }
                  )}
               >
                  <ProfileAbout profile={profile} />
                  {profile.employment?.length > 0 && (
                     <div className="mt-8">
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
   themeStaticProps(),
   profileStaticProps()
)

export default ProfilePage
