import type { GetServerSideProps, NextPage } from 'next'
import { FaGraduationCap } from 'react-icons/fa'
import classNames from 'classnames'
import { MdHomeWork } from 'react-icons/md'

import themeSSR from 'server-side-props/themeSSR'
import profileSSR from 'server-side-props/profileSSR'
import { IProfile } from 'models/Profile'
import ProfileIntro from 'components/ProfileIntro'
import { ssrHelpers } from 'lib/ssrHelpers'
import { ITheme } from 'models/Theme'
import BrandHeader from 'components/BrandHeader'
import AddressLine from 'components/AddressLine'
import EducationItem from 'components/EducationItem'
import EmploymentItem from 'components/EmploymentItem'
import EditableSection from 'components/EditableSection'

const ProfilePage: NextPage<Props> = ({
   theme,
   profile,
   noCardOverflowAuto = true,
}) => {
   return (
      <div className="w-full h-full">
         <header>
            <BrandHeader />
            <div className="text-primary-a11y bg-primary h-48">
               <AddressLine
                  country={profile.addresses?.residential?.country}
                  city={profile.addresses?.residential?.city}
                  state={profile.addresses?.residential?.state}
                  phoneNumber={profile.addresses?.phoneNumber}
                  email={profile.addresses?.email}
                  facebook={profile.addresses?.socialMedia?.facebook}
                  instagram={profile.addresses?.socialMedia?.instagram}
                  linkedin={profile.addresses?.socialMedia?.linkedin}
                  github={profile.addresses?.socialMedia?.github}
                  stackoverflow={profile.addresses?.socialMedia?.stackoverflow}
               />
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
                  <ProfileIntro profile={profile} />
                  {profile.education && (
                     <EditableSection>
                        <div className="mt-8 flex flex-col md:flex-row items-start">
                           <div className="flex items-start mb-8 w-[300px] shrink-0">
                              <FaGraduationCap
                                 color={theme.secondaryColorDark}
                                 size={32}
                              />
                              <span className="text-3xl ml-2">Education</span>
                           </div>
                           {profile.education?.map((ed, index) => (
                              <EducationItem
                                 key={index}
                                 title={ed.title}
                                 start={ed.start}
                                 end={ed.end}
                                 institution={ed.institution}
                                 country={ed.address?.country}
                                 city={ed.address?.city}
                                 state={ed.address?.state}
                              />
                           ))}
                        </div>
                     </EditableSection>
                  )}
                  {profile.employment?.length > 0 && (
                     <div className="mt-8 flex flex-col md:flex-row items-start">
                        <div className="flex items-center mb-8 w-[300px] shrink-0">
                           <MdHomeWork
                              color={theme.secondaryColorDark}
                              size={32}
                           />
                           <span className="text-3xl ml-2">Employment</span>
                        </div>
                        <ul className="list-disc ml-8 mt-0">
                           {profile.employment.map((empl) => (
                              <EditableSection key={empl.employer}>
                                 <EmploymentItem
                                    employer={empl.employer}
                                    role={empl.role}
                                    start={empl.start}
                                    end={empl.end}
                                    achievements={empl.achievements}
                                    skills={empl.knowledge}
                                 />
                              </EditableSection>
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
