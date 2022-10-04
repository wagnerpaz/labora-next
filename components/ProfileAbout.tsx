import React, { useContext, useState } from 'react'

import EditableSection from 'components/EditableSection'
import { IProfile } from 'models/Profile'
import Modal from 'components/mui/Modal'
import ProfileAboutForm from './forms/ProfileAboutForm'
import usePutProfile from 'hooks/api/usePutProfile'
import ProfileContext from 'context/ProfileContext'

const ProfileAbout: React.FC = ({}) => {
   const [putProfile] = usePutProfile()
   const { profile, setProfile } = useContext(ProfileContext)

   const [modalOpen, setModalOpen] = useState(false)

   return (
      <EditableSection onClick={() => setModalOpen(true)}>
         <span className="block text-3xl">{profile.fullName}</span>
         <span className="block text-xl opacity-50">{profile.profession}</span>
         <p className="mt-4 min-h-[100px] mb-auto">{profile.about}</p>
         <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
            <ProfileAboutForm
               profile={profile}
               onCancel={() => setModalOpen(false)}
               onSave={async (newProfile) => {
                  await putProfile(newProfile)
                  setModalOpen(false)
                  setProfile(newProfile)
               }}
            />
         </Modal>
      </EditableSection>
   )
}

export default ProfileAbout
