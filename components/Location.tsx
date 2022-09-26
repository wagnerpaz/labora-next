import { MdLocationPin } from 'react-icons/md'
import { IProfile } from 'models/Profile'
import React from 'react'

const ProfileAbout: React.FC<Props> = ({ profile }) => {
   return profile.addresses?.residential ? (
      <li className="flex flex-row items-center space-x-2">
         <MdLocationPin />
         <span>
            {profile.addresses.residential.country}
            {', '}
            {profile.addresses.residential.city}
            {' - '}
            {profile.addresses.residential.state}
         </span>
      </li>
   ) : null
}

type Props = {
   profile: IProfile
}

export default ProfileAbout
