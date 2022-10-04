import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Button from 'components/mui/Button'
import UserIcon from 'components/UserIcon'

const BrandHeader: React.FC = () => {
   const { data: session, status } = useSession()
   const loading = status === 'loading'

   return (
      <div className="flex justify-center items-start print:ml-2">
         <div className="container flex justify-between items-center py-2">
            <Link href="/">
               <Image
                  alt="Metapriori Logo"
                  src="/images/metapriori_logo_small50.png"
                  height={50}
                  width={173}
                  className="cursor-pointer"
               />
            </Link>
            {!session?.user && (
               <Button
                  className="print:hidden"
                  variant="outline"
                  onClick={(e) => {
                     signIn()
                  }}
               >
                  Sign In
               </Button>
               // <a
               //    href={`/api/auth/signin`}
               //    onClick={(e) => {
               //       e.preventDefault()
               //       signIn()
               //    }}
               //    className="print:hidden"
               // >
               //    Sign in
               // </a>
            )}
            <UserIcon />
         </div>
      </div>
   )
}

export default BrandHeader
