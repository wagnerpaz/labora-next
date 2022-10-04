/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from 'react'

import EditableSection from 'components/EditableSection'
import Modal from 'components/mui/Modal'
import classNames from 'classnames'
import ProfileContext from 'context/ProfileContext'

const ProfileImage = ({ className }) => {
   const { profile } = useContext(ProfileContext)
   const [modalOpen, setModalOpen] = useState(false)

   return (
      <EditableSection
         className={classNames('w-[300px] h-[300px]', className)}
         onClick={() => setModalOpen(true)}
      >
         <img
            className="rounded-sm object-cover object-top"
            alt="Profile Photo"
            src={`/api/profile/photo/${profile._id}`}
         />
         <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
            <span>react-image-crop</span>
         </Modal>
      </EditableSection>
   )
}

export default ProfileImage
