import React from 'react'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useState } from 'react'
import Button from './mui/Button'

const UserIcon = () => {
   const { data: session } = useSession()
   const [menuOpened, setMenuOpened] = useState(false)

   return (
      <>
         {session?.user && (
            <div className="relative w-[30px] h-[30px]">
               <Image
                  src={session.user.image}
                  width={30}
                  height={30}
                  className="rounded-full cursor-pointer border-secondary-dark hover:border-[1px]"
                  onClick={() => setMenuOpened(!menuOpened)}
               />
               {menuOpened && (
                  <div className="absolute right-0 bg-white border-[1px] border-secondary-dark p-2 px-4 rounded-md shadow-lg z-10">
                     <small className="block">Signed in as</small>
                     <strong>{session.user.email ?? session.user.name}</strong>
                     <Button
                        variant="outline"
                        size="sm"
                        className="w-full mt-2 mb-2"
                     >
                        View profile
                     </Button>
                     <div className="border-b-[1px] -mx-4 pb-2 border-secondary-dark" />
                     <Button
                        variant="text"
                        className="normal-case mt-2"
                        onClick={() => {
                           signOut()
                        }}
                     >
                        Sign out
                     </Button>
                  </div>
               )}
            </div>
         )}
      </>
   )
}

export default UserIcon
