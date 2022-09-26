import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BrandHeader: React.FC = () => {
   return (
      <div className="flex justify-center items-start">
         <div className="container w-full flex justify-between">
            <Link href="/">
               <Image
                  src="/images/metapriori_logo_small50.png"
                  height={50}
                  width={173}
                  className="cursor-pointer"
               />
            </Link>
         </div>
      </div>
   )
}

export default BrandHeader
