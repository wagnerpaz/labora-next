import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BrandHeader: React.FC = () => {
   const { data: session, status } = useSession()
   const loading = status === 'loading'

   return (
      <div className="flex justify-center items-start">
         <div className="container flex justify-between">
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
               >
                  Sign in
               </a>
            )}
         </div>
      </div>
   )
}

export default BrandHeader
