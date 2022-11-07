import classNames from 'classnames'
import Input from 'components/mui/Input'
import UpDownControl from 'components/UpDownControl'
import React from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { MdOutlineClose, MdOutlineDragIndicator } from 'react-icons/md'

export const ACCEPT = 'Anything'

const ArrayFieldItemControl = ({
   id,
   originalIndex,
   inputProps = {},
   onFind,
   onDrop,
   onClose,
}) => {
   const [{ isDragging }, drag, preview] = useDrag(
      () => ({
         type: ACCEPT,
         item: { id, originalIndex },
         collect: (monitor) => ({
            isDragging: monitor.isDragging(),
         }),
         end: (item, monitor) => {
            const { id: droppedId, originalIndex } = item
            const didDrop = monitor.didDrop()
            if (!didDrop) {
               onDrop(droppedId, originalIndex)
            }
         },
      }),
      [id, originalIndex, onDrop]
   )

   const [, drop] = useDrop(
      () => ({
         accept: ACCEPT,
         hover({ id: draggedId, originalIndex: indexFrom }: Item) {
            if (draggedId !== id) {
               const { index: overIndex } = onFind(id)
               onDrop(draggedId, overIndex)
            }
         },
      }),
      [onFind, onDrop]
   )

   return (
      <div
         ref={(node) => preview(drop(node))}
         className={classNames('flex flex-row items-center gap-2', {
            'opacity-0': isDragging,
         })}
      >
         <Input className="flex-1 m-0" inputClassName="mb-0" {...inputProps} />
         <div className="flex flex-col gap-2">
            <MdOutlineClose
               className="cursor-pointer select-none fill-secondary-dark"
               onClick={onClose}
            />
            <div ref={(node) => drag(node)}>
               <MdOutlineDragIndicator className="cursor-move fill-secondary-dark" />
            </div>
         </div>
      </div>
   )
}

interface Item {
   id: string
   originalIndex: number
}

export default ArrayFieldItemControl
