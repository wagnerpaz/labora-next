import type { GetServerSideProps, NextPage } from 'next'
import { FaGraduationCap } from 'react-icons/fa'
import classNames from 'classnames'
import { MdHomeWork } from 'react-icons/md'

import themeSSR from 'server-side-props/themeSSR'
import profileSSR from 'server-side-props/profileSSR'
import { IProfile } from 'models/Profile'
import ProfileIntro from 'components/profile/single/ProfileIntro'
import { ssrHelpers } from 'lib/ssrHelpers'
import { ITheme } from 'models/Theme'
import BrandHeader from 'components/BrandHeader'
import AddressLine from 'components/profile/stateless/AddressLine'
import EducationItem from 'components/profile/stateless/EducationItem'
import EmploymentItem from 'components/profile/stateless/EmploymentItem'
import EditableSection from 'components/EditableSection'
import ProfileContext, { ProfileProvider } from 'context/ProfileContext'
import { useContext, useState } from 'react'
import Button from 'components/mui/Button'
import UserContext from 'context/UserContext'
import Modal from 'components/mui/Modal'
import EmploymentItemForm from 'components/forms/EmploymentItemForm'
import usePutProfile from 'hooks/api/usePutProfile'

const ProfilePage: NextPage<Props> = ({
   theme,
   profile: ssrProfile,
   noCardOverflowAuto = true,
}) => {
   return (
      <ProfileProvider currentProfile={ssrProfile}>
         <ProfileRender theme={theme} noCardOverflowAuto={noCardOverflowAuto} />
      </ProfileProvider>
   )
}

const ProfileRender: React.FC<Omit<Props, 'profile'>> = ({
   theme,
   noCardOverflowAuto,
}) => {
   const { profile, setProfile } = useContext(ProfileContext)
   const { isSelected } = useContext(UserContext)

   const [putProfile] = usePutProfile()

   const [addEmploymentItemModalOpen, setAddEmploymentItemModalOpen] =
      useState(false)

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
                           <div className="flex justify-between mb-8 w-[300px] shrink-0">
                              <div className="flex items-center">
                                 <FaGraduationCap
                                    color={theme.secondaryColorDark}
                                    size={32}
                                 />
                                 <span className="text-3xl ml-2">
                                    Education
                                 </span>
                              </div>
                              {/*isSelected && (
                                 <Button
                                    className="min-w-[30px] print:hidden"
                                    variant="outline"
                                 >
                                    Add
                                 </Button>
                              )*/}
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
                        <div className="flex justify-between mb-8 w-[300px] shrink-0">
                           <div className="flex items-center">
                              <MdHomeWork
                                 color={theme.secondaryColorDark}
                                 size={32}
                              />
                              <span className="text-3xl ml-2">Employment</span>
                           </div>
                           {isSelected && (
                              <Button
                                 className="min-w-[30px] print:hidden"
                                 variant="outline"
                                 onClick={() =>
                                    setAddEmploymentItemModalOpen(true)
                                 }
                              >
                                 Add
                              </Button>
                           )}
                        </div>
                        <ul className="list-disc ml-8 mt-0">
                           {profile.employment.map((employmentItem, index) => (
                              <EmploymentItem
                                 key={employmentItem.employer}
                                 employmentItem={employmentItem}
                                 employmentIndex={index}
                              />
                           ))}
                        </ul>
                        <Modal
                           open={addEmploymentItemModalOpen}
                           onClose={() => setAddEmploymentItemModalOpen(false)}
                        >
                           <EmploymentItemForm
                              employmentItem={{
                                 employer: '',
                                 role: '',
                                 start: '',
                                 end: '',
                              }}
                              onCancel={() =>
                                 setAddEmploymentItemModalOpen(false)
                              }
                              onSave={async (newEmployerItem) => {
                                 const newProfile = { ...profile }
                                 newProfile.employment.unshift(newEmployerItem)
                                 await putProfile(newProfile)
                                 setAddEmploymentItemModalOpen(false)
                                 setProfile(newProfile)
                              }}
                           />
                        </Modal>
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
