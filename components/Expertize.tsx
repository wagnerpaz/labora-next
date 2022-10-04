import React, { useContext } from 'react'
import Chip from './Chip'

import ProfileContext from 'context/ProfileContext'

const Expertize: React.FC<Props> = ({ hideHighlight, hideNormal }) => {
   const { profile } = useContext(ProfileContext)
   return (
      <ul className="flex flex-col gap-2 mt-2 whitespace-nowrap">
         <div className="flex flex-wrap gap-1">
            {profile.experience
               .sort((p1, p2) => (p1.highlight ? -1 : 1))
               .filter((ex) => (hideHighlight ? !ex.highlight : true))
               .filter((ex) => (hideNormal ? ex.highlight : true))
               .map((ex) => (
                  <Chip
                     key={ex.name}
                     name={ex.name}
                     count={ex.years}
                     unit="ys"
                     highlight={ex.highlight}
                  />
               ))}
         </div>
      </ul>
   )
}

type Props = {
   hideHighlight?: boolean
   hideNormal?: boolean
}

export default Expertize
