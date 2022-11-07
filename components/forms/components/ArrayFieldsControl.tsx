import classNames from 'classnames'
import React from 'react'
import { DndProvider, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { ACCEPT } from './ArrayFieldItemControl'

const ArrayFieldsControlProviderWrapper = (props) => {
   return (
      <DndProvider backend={HTML5Backend}>
         <ArrayFieldsControl {...props} />
      </DndProvider>
   )
}

const ArrayFieldsControl = ({ className, array, children }) => {
   const [, drop] = useDrop(() => ({
      accept: ACCEPT,
   }))

   return (
      <div ref={drop} className={classNames('flex flex-col gap-4', className)}>
         {array.map((array, index) => (
            <div key={array.id}>{children(array, index)}</div>
         ))}
      </div>
   )
}

export default ArrayFieldsControlProviderWrapper
