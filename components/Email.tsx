import React from 'react'
import { MdEmail } from 'react-icons/md'

import { IProfile } from 'api/models/Profile'

const Email: React.FC<Props> = ({ profile }) => {
   return (
      <li className="flex flex-row items-center space-x-2">
         <MdEmail />
         <span>{profile.addresses.email}</span>
      </li>
   )
}

type Props = {
   profile: IProfile
}

export default Email
