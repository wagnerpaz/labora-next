import React from 'react'
import { MdEmail } from 'react-icons/md'

const Email: React.FC<Props> = ({ email }) => {
   return email ? (
      <li className="inline-block space-x-2">
         <MdEmail className="inline-block" />
         <span className="truncate hidden md:inline align-text-top">
            {email}
         </span>
      </li>
   ) : null
}

type Props = {
   email: string
}

export default Email
