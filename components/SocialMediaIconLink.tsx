import React from 'react'
import {
   FaFacebook,
   FaGithub,
   FaInstagram,
   FaLinkedin,
   FaStackOverflow,
} from 'react-icons/fa'

const SocialMediaIconLink: React.FC<Props> = ({ socialMediaName, address }) => {
   const icons = {
      facebook: <FaFacebook />,
      instagram: <FaInstagram />,
      linkedin: <FaLinkedin />,
      github: <FaGithub />,
      stackoverflow: <FaStackOverflow />,
   }

   return (
      <li className="flex items-center">
         <a href={address} target="_blank" rel="noreferrer">
            {icons[socialMediaName]}
         </a>
      </li>
   )
}

type Props = {
   // | 'facebook'
   // | 'instagram'
   // | 'linkedin'
   // | 'github'
   // | 'stackoverflow'
   socialMediaName: string
   address: string
}

export default SocialMediaIconLink
