import React, { useState, useContext } from 'react'

import EditableSection from 'components/EditableSection'
import Modal from 'components/mui/Modal'
import EmploymentItemForm from 'components/forms/EmploymentItemForm'
import { IEmploymentItem } from 'models/Profile'
import usePutProfile from 'hooks/api/usePutProfile'
import ProfileContext from 'context/ProfileContext'
import ConfirmModal from 'components/mui/ConfirmModal'

const EmploymentItem: React.FC<Props> = ({
   employmentItem,
   employmentIndex,
}) => {
   const [modalOpen, setModalOpen] = useState(false)
   const [tryingToDelete, setTryingToDelete] = useState(false)

   const [putProfile] = usePutProfile()
   const { profile, setProfile } = useContext(ProfileContext)

   const {
      role,
      employer,
      start,
      end,
      achievements = [],
      knowledge = [],
   } = employmentItem

   const handleDelete = async () => {
      const newProfile = { ...profile }
      newProfile.employment = newProfile.employment.filter(
         (e, index) => index !== employmentIndex
      )
      await putProfile(newProfile)
      setModalOpen(false)
      setProfile(newProfile)
   }

   return (
      <EditableSection
         onEditClick={() => setModalOpen(true)}
         onDeleteClick={() => setTryingToDelete(true)}
      >
         <li className="mb-6">
            <span className="block text-xl">{role}</span>
            <span className="block text-base">
               {employer} • {start} - {end ? end : 'PRESENT'}
            </span>
            <ul className="ml-8 list-circle mt-2">
               {achievements.map((achv) => (
                  <li
                     className="print:break-inside-avoid"
                     key={achv.description}
                  >
                     {achv.description}
                  </li>
               ))}
            </ul>
            <span className="inline-block mt-2 opacity-50">
               Skills:{' '}
               <ul className="inline">
                  {knowledge.map((k, index) => (
                     <span key={k.description}>
                        <li className="inline-block">{k.description}</li>
                        {index !== knowledge.length - 1 && ', '}
                     </span>
                  ))}
               </ul>
            </span>
         </li>
         <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
            <EmploymentItemForm
               employmentItem={employmentItem}
               onCancel={() => setModalOpen(false)}
               onSave={async (newEmployerItem) => {
                  const newProfile = { ...profile }
                  newProfile.employment[employmentIndex] = newEmployerItem
                  await putProfile(newProfile)
                  setModalOpen(false)
                  setProfile(newProfile)
               }}
            />
         </Modal>
         <ConfirmModal
            className="w-96"
            open={tryingToDelete}
            noContainer
            onAccept={() => handleDelete()}
            onReject={() => setTryingToDelete(false)}
            onClose={() => setTryingToDelete(false)}
         >
            <p>
               Are you sure you want to delete the employment record of{' '}
               <strong>{employer}</strong> ({start} - {end})?
            </p>
         </ConfirmModal>
      </EditableSection>
   )
}

type Props = {
   employmentItem: IEmploymentItem
   employmentIndex: number
}

export default EmploymentItem
