import { MdLocationPin } from 'react-icons/md'
import React from 'react'

const ProfileAbout: React.FC<Props> = ({ country, city, state }) => {
   return country || city || state ? (
      <li className="inline-block space-x-2">
         <MdLocationPin className="inline-block" />
         <span className="truncate hidden md:inline print:inline align-text-top">{`${country}, ${city} - ${state}`}</span>
      </li>
   ) : null
}

type Props = {
   country: string
   city: string
   state: string
}

export default ProfileAbout
