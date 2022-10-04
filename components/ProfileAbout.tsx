import React, { useState } from 'react'

import EditableSection from 'components/EditableSection'
import { IProfile } from 'models/Profile'
import Modal from 'components/mui/Modal'
import ProfileAboutForm from './forms/ProfileAboutForm'

const ProfileAbout: React.FC<Props> = ({ profile }) => {
   const [modalOpen, setModalOpen] = useState(false)

   return (
      <EditableSection onClick={() => setModalOpen(true)}>
         <span className="block text-3xl">{profile.fullName}</span>
         <span className="block text-xl opacity-50">{profile.profession}</span>
         <p className="mt-4 min-h-[100px] mb-auto">{profile.about}</p>
         <Modal
            className="container -ml-2"
            open={modalOpen}
            onClose={() => setModalOpen(false)}
         >
            <ProfileAboutForm />
         </Modal>
      </EditableSection>
   )
}

type Props = {
   profile: IProfile
}

export default ProfileAbout
