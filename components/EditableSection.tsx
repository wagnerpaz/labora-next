import React, { MouseEventHandler, useContext } from 'react'
import classNames from 'classnames'
import { MdEdit } from 'react-icons/md'

import UserContext from 'context/UserContext'

const EditableSection: React.FC<Props> = ({ className, children, onClick }) => {
   const { isSelected } = useContext(UserContext)
   return (
      <div className={classNames(className, 'relative group min-h-0 min-w-0')}>
         {children}
         <MdEdit
            className={classNames(
               'absolute right-2 top-2 hidden group-hover:block cursor-pointer print:group-hover:hidden',
               { 'group-hover:hidden': !isSelected }
            )}
            onClick={onClick}
         />
      </div>
   )
}

type Props = {
   className?: string
   children: React.ReactNode
   onClick?: MouseEventHandler<SVGElement>
}

export default EditableSection
