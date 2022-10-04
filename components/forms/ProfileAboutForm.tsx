import React from 'react'
import classNames from 'classnames'

import LabeledInput from 'components/mui/LabeledInput'

const ProfileAboutForm: React.FC<Props> = ({ className }) => {
   return (
      <div className={className}>
         <LabeledInput label="Full Name" />
         <LabeledInput label="Profession" />
         <LabeledInput label="About" multiline rows={4} />
      </div>
   )
}

type Props = {
   className?: string
}

export default ProfileAboutForm
