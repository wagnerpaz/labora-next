import React from 'react'

const EmploymentItem: React.FC<Props> = ({
   employer,
   role,
   start,
   end,
   achievements,
   skills,
}) => {
   return (
      <li className="mb-6">
         <span className="block text-xl">{role}</span>
         <span className="block text-base">
            {employer} • {start} -{end ? end : 'PRESENT'}
         </span>
         <ul className="ml-8 list-circle mt-2">
            {achievements.map((achv) => (
               <li className="print:break-inside-avoid" key={achv}>
                  {achv}
               </li>
            ))}
         </ul>
         <span className="inline-block mt-2 opacity-50">
            Skills:{' '}
            <ul className="inline">
               {skills.map((k, index) => (
                  <span key={k}>
                     <li className="inline-block">{k}</li>
                     {index !== skills.length - 1 && ', '}
                  </span>
               ))}
            </ul>
         </span>
      </li>
   )
}

type Props = {
   employer: string
   role: string
   start: string
   end: string
   achievements: [string]
   skills: [string]
}

export default EmploymentItem
