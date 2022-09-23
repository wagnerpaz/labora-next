import themeSSR from 'server-side-props/themeSSR'
import type { NextPage } from 'next'

import { ssrHelpers } from 'lib/ssrHelpers'

const Home: NextPage = () => {
   return (
      <header>
         <div className="flex flex-col">
            <address className="flex justify-center bg-primary text-primary-a11y py-2.5">
               <div className="container">MetaPriori</div>
            </address>
         </div>
      </header>
   )
}

export const getServerSideProps = ssrHelpers.pipe(themeSSR())

export default Home
