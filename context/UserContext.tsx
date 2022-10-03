import React from 'react'
import { useSession } from 'next-auth/react'

import useProfileByOwner from 'hooks/api/useProfileByOwner'
import { IProfile } from 'models/Profile'

const UserContext = React.createContext<Value>({ profile: undefined })

export const UserProvider = ({ children }) => {
   const { data: session } = useSession()
   const { data: profile } = useProfileByOwner(session?.user?.email)

   return (
      <UserContext.Provider value={{ profile }}>
         {children}
      </UserContext.Provider>
   )
}

type Value = {
   profile: IProfile
}

export default UserContext
