/* eslint-disable @next/next/no-img-element */
import React from 'react'

import { IProfile } from 'models/Profile'
import Link from 'next/link'
import Expertize from '../stateless/Expertize'

const ProfileThumbnail: React.FC<Props> = ({ profile }) => {
   const profileLink = `/profile/${profile.slug || profile._id}`

   return (
      <>
         <div className="h-[150px] w-[150px] relative shrink-0 rounded-md float-left mr-4 mb-0">
            <Link href={profileLink}>
               <img
                  className="object-cover object-top w-[150px] h-[150px] cursor-pointer"
                  alt="Profile Photo"
                  src={`/api/profile/photo/${profile._id}`}
               />
            </Link>
         </div>
         <div className="min-h-[150px]">
            <Link href={profileLink}>
               <span className="block text-xl cursor-pointer hover:text-primary">
                  {profile.fullName}
               </span>
            </Link>
            <span className="block text-gray-500">{profile.profession}</span>
            <p className="mt-2">{profile.about}</p>
         </div>
         <Expertize profile={profile} />
      </>
   )
}

type Props = {
   profile: IProfile
}

export default ProfileThumbnail
