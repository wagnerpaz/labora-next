import React from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

import useProfileByOwner from 'hooks/api/useProfileByOwner'
import { IProfile } from 'models/Profile'

const UserContext = React.createContext<Value>({
   profile: undefined,
   isSelected: undefined,
})

export const UserProvider = ({ children }) => {
   const { data: session } = useSession()
   const { data: profile } = useProfileByOwner(session?.user?.email)
   const router = useRouter()

   const isSelected =
      router.query.slugOrId === profile?.slug ||
      router.query.slugOrId === profile?._id

   return (
      <UserContext.Provider value={{ profile, isSelected }}>
         {children}
      </UserContext.Provider>
   )
}

type Value = {
   profile: IProfile
   isSelected: boolean
}

export default UserContext
