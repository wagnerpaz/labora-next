import React from 'react'

import Location from 'components/profile/stateless/Location'
import Phone from 'components/profile/stateless/Phone'
import Email from 'components/profile/stateless/Email'
import SocialMediaIconLink from 'components/profile/stateless/SocialMediaIconLink'

const AddressLine: React.FC<Props> = ({
   country,
   city,
   state,
   phoneNumber,
   email,
   facebook,
   instagram,
   linkedin,
   github,
   stackoverflow,
}) => {
   const socialMedias = { facebook, instagram, linkedin, github, stackoverflow }
   return (
      <address className="not-italic flex justify-center items-start py-[9px]">
         <div className="container flex flex-row justify-between space-x-4 print:px-4 overflow-hidden">
            <ul className="inline-block space-x-4 whitespace-nowrap w-full truncate align-top">
               <Location country={country} city={city} state={state} />
               <Phone phoneNumber={phoneNumber} />
               <Email email={email} />
            </ul>
            {Object.keys(socialMedias).filter((sm) => socialMedias[sm]).length >
               0 && (
               <ul className="inline-block space-x-4 whitespace-nowrap">
                  {Object.keys(socialMedias).map((smKey) => (
                     <SocialMediaIconLink
                        key={smKey}
                        socialMediaName={smKey}
                        address={socialMedias[smKey]}
                     />
                  ))}
               </ul>
            )}
         </div>
      </address>
   )
}

type Props = {
   country?: string
   city?: string
   state?: string
   phoneNumber?: string
   email?: string
   facebook?: string
   instagram?: string
   linkedin?: string
   github?: string
   stackoverflow?: string
}

export default AddressLine
