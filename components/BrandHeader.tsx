import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BrandHeader: React.FC = () => {
   const { data: session, status } = useSession()
   const loading = status === 'loading'

   return (
      <div className="flex justify-center items-start print:ml-2">
         <div className="container flex justify-between items-center py-2">
            <Link href="/">
               <Image
                  src="/images/metapriori_logo_small50.png"
                  height={50}
                  width={173}
                  className="cursor-pointer"
               />
            </Link>
            {!session?.user && (
               <a
                  href={`/api/auth/signin`}
                  onClick={(e) => {
                     e.preventDefault()
                     signIn()
                  }}
                  className="print:hidden"
               >
                  Sign in
               </a>
            )}
            {session?.user && (
               <div className="flex items-center gap-2 print:hidden">
                  {session.user.image && (
                     <Image
                        src={session.user.image}
                        width={50}
                        height={50}
                        className="rounded-full"
                     />
                  )}
                  <span>
                     <small>Signed in as</small>
                     <br />
                     <strong>{session.user.email ?? session.user.name}</strong>
                  </span>
                  <a
                     href={`/api/auth/signout`}
                     onClick={(e) => {
                        e.preventDefault()
                        signOut()
                     }}
                  >
                     Sign out
                  </a>
               </div>
            )}
         </div>
      </div>
   )
}

export default BrandHeader
