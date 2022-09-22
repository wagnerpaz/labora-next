import React from 'react'
import { MdPhone } from 'react-icons/md'
import { IProfile } from 'api/models/Profile'

const Phone: React.FC<Props> = ({ profile }) => {
   return (
      <li className="flex flex-row items-center space-x-2">
         <MdPhone />
         <span>{profile.addresses.phoneNumber}</span>
      </li>
   )
}

type Props = {
   profile: IProfile
}

export default Phone
