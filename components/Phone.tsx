import React from 'react'
import { MdPhone } from 'react-icons/md'

const Phone: React.FC<Props> = ({ phoneNumber }) => {
   return phoneNumber ? (
      <li className="inline-block space-x-2">
         <MdPhone className="inline-block" />
         <span className="truncate hidden md:inline align-text-top">
            {phoneNumber}
         </span>
      </li>
   ) : null
}

type Props = {
   phoneNumber: string
}

export default Phone
