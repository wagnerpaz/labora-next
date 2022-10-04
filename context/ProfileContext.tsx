import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

import useGetProfile from 'hooks/api/useGetProfile'
import { IProfile } from 'models/Profile'

const ProfileContext = React.createContext<Value>({
   profile: undefined,
   setProfile: undefined,
})

export const ProfileProvider = ({ children, currentProfile }) => {
   const [profile, setProfile] = useState(currentProfile)

   return (
      <ProfileContext.Provider value={{ profile, setProfile }}>
         {children}
      </ProfileContext.Provider>
   )
}

type Value = {
   profile: IProfile
   setProfile: (profile: IProfile) => void
}

export default ProfileContext
