import { MdLocationPin } from 'react-icons/md'
import React from 'react'

const ProfileAbout: React.FC<Props> = ({ country, city, state }) => {
   return country || city || state ? (
      <div className="inline-block">
         <li className="flex flex-row items-center space-x-2">
            <MdLocationPin />
            <span>{`${country}, ${city} - ${state}`}</span>
         </li>
      </div>
   ) : null
}

type Props = {
   country: string
   city: string
   state: string
}

export default ProfileAbout
