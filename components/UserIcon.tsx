import React, { useContext } from 'react'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useState } from 'react'
import Button from './mui/Button'
import Link from 'next/link'

import useProfileByOwner from 'hooks/api/useProfileByOwner'
import ClickOutside from 'components/ClickOutside'
import UserContext from 'context/UserContext'

const UserIcon = () => {
   const { data: session } = useSession()
   const { profile } = useContext(UserContext)

   const [menuOpened, setMenuOpened] = useState(false)

   return (
      <>
         {session?.user && (
            <div className="relative w-[30px] h-[30px] print:hidden">
               <Image
                  alt="user image"
                  src={session.user.image}
                  width={30}
                  height={30}
                  className="rounded-full cursor-pointer border-secondary-dark hover:border-[1px]"
                  onClick={() => setMenuOpened(!menuOpened)}
               />
               {menuOpened && (
                  <ClickOutside onClickOutside={() => setMenuOpened(false)}>
                     <div className="absolute right-0 bg-white border-[1px] border-secondary-light p-2 px-4 rounded-md shadow-lg z-10">
                        <small className="block">Signed in as</small>
                        <strong>
                           {session.user.email ?? session.user.name}
                        </strong>
                        <Link href={`/profile/${profile.slug}`}>
                           <Button
                              variant="outline"
                              size="sm"
                              className="w-full mt-2 mb-2"
                              onClick={() => setMenuOpened(false)}
                           >
                              View profile
                           </Button>
                        </Link>
                        <div className="border-b-[1px] -mx-4 pb-2 border-secondary-light" />
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
                  </ClickOutside>
               )}
            </div>
         )}
      </>
   )
}

export default UserIcon
