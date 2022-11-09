import React, { MouseEventHandler, useContext } from 'react'
import classNames from 'classnames'
import { MdEdit, MdDelete } from 'react-icons/md'

import UserContext from 'context/UserContext'

const EditableSection: React.FC<Props> = ({
   className,
   children,
   hideDelete,
   onEditClick,
   onDeleteClick,
}) => {
   const { isSelected } = useContext(UserContext)
   return (
      <div className={classNames(className, 'relative group min-h-0 min-w-0')}>
         {children}
         <div
            className={classNames(
               'absolute right-2 top-2 hidden group-hover:flex cursor-pointer print:group-hover:hidden flex-row gap-2',
               { 'group-hover:hidden': !isSelected }
            )}
         >
            <MdDelete
               className={classNames({ hidden: hideDelete })}
               onClick={onDeleteClick}
            />
            <MdEdit onClick={onEditClick} />
         </div>
      </div>
   )
}

type Props = {
   className?: string
   children: React.ReactNode
   hideDelete?: boolean
   onEditClick?: MouseEventHandler<SVGElement>
   onDeleteClick?: MouseEventHandler<SVGElement>
}

export default EditableSection
