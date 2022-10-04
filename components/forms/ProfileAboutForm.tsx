import React, { useState } from 'react'
import classNames from 'classnames'

import LabeledInput from 'components/mui/LabeledInput'
import { IProfile } from 'models/Profile'
import Button from 'components/mui/Button'

const ProfileAboutForm: React.FC<Props> = ({
   className,
   profile,
   onCancel,
   onSave,
}) => {
   const [fullName, setFullName] = useState(profile.fullName)
   const [profession, setProfession] = useState(profile.profession)
   const [about, setAbout] = useState(profile.about)

   return (
      <form
         className={classNames(className)}
         onSubmit={(evt) => {
            evt.preventDefault()
            onSave({ ...profile, fullName, profession, about })
         }}
      >
         <LabeledInput
            label="Full Name"
            value={fullName}
            onChange={(evt) => setFullName(evt.target.value)}
         />
         <LabeledInput
            label="Profession"
            value={profession}
            onChange={(evt) => setProfession(evt.target.value)}
         />
         <LabeledInput
            label="About"
            multiline
            rows={4}
            value={about}
            onChange={(evt) => setAbout(evt.target.value)}
         />
         <div className="text-end">
            <Button
               variant="outline"
               className="inline-block"
               onClick={onCancel}
            >
               Cancel
            </Button>
            <Button
               type="submit"
               variant="contained"
               className="inline-block ml-2"
               onClick={() => {
                  onSave({ ...profile, fullName, profession, about })
               }}
            >
               Save
            </Button>
         </div>
      </form>
   )
}

type Props = {
   className?: string
   profile: IProfile
   onCancel: () => void
   onSave: (newProfile: IProfile) => void
}

export default ProfileAboutForm
