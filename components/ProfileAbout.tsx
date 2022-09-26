import React from 'react'

import { IProfile } from 'models/Profile'
import Expertize from './Expertize'

const ProfileAbout: React.FC<Props> = ({ profile }) => {
   return (
      <div className="min-h-[300px]">
         <img
            className="float-left relative shrink-0 rounded-sm object-cover object-top w-[300px] h-[300px] mr-8 mb-4"
            alt="Profile Photo"
            src={`/api/profile/photo/${profile._id}`}
         />
         <span className="block text-3xl">{profile.fullName}</span>
         <span className="block text-xl opacity-50">{profile.profession}</span>
         <p className="mt-4 min-h-[100px] mb-auto">{profile.about}</p>
         <Expertize profile={profile} hideNormal />
         <Expertize profile={profile} hideHighlight />
      </div>
   )
}

type Props = {
   profile: IProfile
}

export default ProfileAbout
