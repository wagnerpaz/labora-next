import React from 'react'

import Location from 'components/Location'
import Phone from 'components/Phone'
import Email from 'components/Email'
import SocialMediaIconLink from 'components/SocialMediaIconLink'

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
      <address className="not-italic flex justify-center items-start py-2.5">
         <div className="container flex flex-row justify-between space-x-4 print:px-4">
            <ul className="flex flex-row space-x-4">
               <Location country={country} city={city} state={state} />
               <Phone phoneNumber={phoneNumber} />
               <Email email={email} />
            </ul>
            {Object.keys(socialMedias).filter((sm) => socialMedias[sm]).length >
               0 && (
               <ul className="flex flex-row space-x-4">
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
