import { IProfile } from 'api/models/Profile'
import React from 'react'

import Chip from 'components/Chip'

const ProfileAbout: React.FC<Props> = ({ profile }) => {
   const { fullName, profession, about, experience } = profile

   return (
      <div className="flex flex-row gap-8">
         <div className="bg-[url('/images/professional-me.jpeg')] w-[300px] h-[300px] bg-cover rounded-sm shrink-0" />
         <div className="flex flex-col min-h-[300px] justify-between">
            <div className="flex flex-col">
               <span className="text-3xl">{profile.fullName}</span>
               <span className="text-xl opacity-50">{profile.profession}</span>
               <p className="mt-8">{profile.about}</p>
            </div>
            <ul className="flex flex-col gap-2 flex-wrap mt-8">
               <div className="flex gap-1">
                  {profile.experience
                     .filter((ex) => ex.highlight)
                     .map((ex) => (
                        <Chip
                           key={ex.name}
                           name={ex.name}
                           count={ex.years}
                           unit="ys"
                           highlight
                        />
                     ))}
               </div>
               <div className="flex gap-1">
                  {profile.experience
                     .filter((ex) => !ex.highlight)
                     .map((ex) => (
                        <Chip
                           key={ex.name}
                           name={ex.name}
                           count={ex.years}
                           unit="ys"
                        />
                     ))}
               </div>
            </ul>
         </div>
      </div>
   )
}

type Props = {
   profile: IProfile
}

export default ProfileAbout
