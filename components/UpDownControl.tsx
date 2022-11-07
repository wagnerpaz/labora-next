import React from 'react'
import classNames from 'classnames'
import { MdArrowUpward, MdArrowDownward } from 'react-icons/md'

const UpDownControl: React.FC<Props> = ({
   className,
   upDisabled,
   downDisabled,
   onUpClick,
   onDownClick,
}) => {
   return (
      <div className={className}>
         <MdArrowUpward
            className="cursor-pointer select-none mb-2"
            color={upDisabled ? 'gray' : undefined}
            onClick={!upDisabled ? onUpClick : undefined}
         />
         <MdArrowDownward
            className="cursor-pointer select-none"
            color={downDisabled ? 'gray' : undefined}
            onClick={!downDisabled ? onDownClick : undefined}
         />
      </div>
   )
}

type Props = {
   className?: string
   upDisabled?: boolean
   downDisabled?: boolean
   onUpClick?: () => void
   onDownClick?: () => void
}

export default UpDownControl
