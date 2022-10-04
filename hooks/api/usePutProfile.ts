import { useState, useEffect } from 'react'
import axios from 'axios'

import { IProfile } from 'models/Profile'

export default function usePutProfile() {
   const put = async (profile) => {
      return axios.put<IProfile>(`/api/profile/${profile._id}`, profile)
   }

   return [put]
}
