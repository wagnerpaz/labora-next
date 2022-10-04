import { useState, useEffect } from 'react'

import { IProfile } from 'models/Profile'

export default function useGetProfile(id: string) {
   const [data, setData] = useState<IProfile>()
   const [loading, setLoading] = useState(false)

   useEffect(() => {
      setLoading(true)
      fetch(`/api/profile/${id}`)
         .then((res) => res.json())
         .then((data) => {
            setData(data)
            setLoading(false)
         })
   }, [id])

   return { data, loading }
}
