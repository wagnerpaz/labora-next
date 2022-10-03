import { useState, useEffect } from 'react'

import { IProfile } from 'models/Profile'

export default function useProfileByOwner(owner: string) {
   const [data, setData] = useState<IProfile>()
   const [loading, setLoading] = useState(false)

   useEffect(() => {
      setLoading(true)
      fetch(`/api/profile/byOwner/${owner}`)
         .then((res) => res.json())
         .then((data) => {
            setData(data)
            setLoading(false)
         })
   }, [owner])

   return { data, loading }
}
