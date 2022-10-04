/* eslint-disable @next/next/no-img-element */
import React from 'react'

import { IProfile } from 'models/Profile'
import Expertize from 'components/profile/stateless/Expertize'
import EditableSection from 'components/EditableSection'
import ProfileImage from 'components/profile/single/ProfileImage'
import ProfileAbout from 'components/profile/single/ProfileAbout'

const ProfileIntro: React.FC<Props> = ({ profile }) => {
   return (
      <div className="min-h-[300px]">
         <ProfileImage className="float-left mr-8 mb-4 z-10 shrink-0" />
         <ProfileAbout />
         <EditableSection>
            <Expertize profile={profile} hideNormal />
            <Expertize profile={profile} hideHighlight />
         </EditableSection>
      </div>
   )
}

type Props = {
   profile: IProfile
}

export default ProfileIntro
