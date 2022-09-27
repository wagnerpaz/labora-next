import React from 'react'
import { MdPhone } from 'react-icons/md'

const Phone: React.FC<Props> = ({ phoneNumber }) => {
   return phoneNumber ? (
      <li className="flex flex-row items-center space-x-2">
         <MdPhone />
         <span>{phoneNumber}</span>
      </li>
   ) : null
}

type Props = {
   phoneNumber: string
}

export default Phone
