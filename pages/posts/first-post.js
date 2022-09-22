import Link from 'next/link'

export default function FirstPost() {
   const content = 'content'
   const array = [
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
      'cccccccccccccccccccccccccccccccc',
   ]
   return (
      <section>
         <h1>First Post</h1>
         <p>{content}</p>
         <ul>
            {array.map((el) => (
               <li key={el}>{el}</li>
            ))}
         </ul>
         <Link href="/">Back to home</Link>
      </section>
   )
}
