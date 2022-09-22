import themeStaticProps from 'static-props/themeStaticProps'
import type { NextPage } from 'next'
import { pipeProps } from 'next-pipe-props'

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

export const getStaticProps = pipeProps(themeStaticProps)

export default Home
