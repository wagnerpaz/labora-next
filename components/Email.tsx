import React from 'react'
import { MdEmail } from 'react-icons/md'

const Email: React.FC<Props> = ({ email }) => {
   return email ? (
      <li className="flex flex-row items-center space-x-2">
         <MdEmail />
         <span>{email}</span>
      </li>
   ) : null
}

type Props = {
   email: string
}

export default Email
