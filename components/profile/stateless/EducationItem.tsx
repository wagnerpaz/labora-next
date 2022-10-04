import React from 'react'

import Location from 'components/profile/stateless/Location'

const EducationItem: React.FC<Props> = ({
   title,
   start,
   end,
   institution,
   country,
   city,
   state,
}) => {
   return (
      <div className="ml-8">
         <span className="text-xl">{title}</span>
         {` `}
         <span>
            {start} - {end ? end : 'PRESENT'}
         </span>
         <span className="flex items-center opacity-50">
            <span className="mr-2">{institution}</span>
            <Location country={country} city={city} state={state} />
         </span>
      </div>
   )
}

type Props = {
   title: string
   start: string
   end?: string
   institution: string
   country: string
   city: string
   state: string
}

export default EducationItem
