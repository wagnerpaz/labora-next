import React from 'react'
import classNames from 'classnames'

const Chip: React.FC<Props> = ({ name, count, unit, highlight }) => {
   return (
      <li
         className={classNames('border-[1px] list-none p-2 px-3 rounded-3xl', {
            'bg-secondary-dark text-secondary-dark-a11y': highlight,
         })}
      >
         {name} &nbsp;
         <span className="text-gray-400">
            {count}
            {unit}
         </span>
      </li>
   )
}

type Props = {
   name: string
   count: number
   unit: string
   highlight?: boolean
}

export default Chip
