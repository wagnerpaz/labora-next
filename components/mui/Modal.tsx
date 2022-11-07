import React from 'react'
import classNames from 'classnames'
import ModalUnstyled, { ModalUnstyledProps } from '@mui/base/ModalUnstyled'

import Backdrop from 'components/mui/Backdrop'

const Modal = React.forwardRef(function Modal(
   {
      className,
      containerClassName = '',
      noContainer,
      ...props
   }: ModalUnstyledProps & Props,
   ref: React.ForwardedRef<HTMLDivElement>
) {
   return (
      <ModalUnstyled
         {...props}
         components={{ Backdrop }}
         disableEnforceFocus
         ref={ref}
      >
         <div
            className={classNames(
               'fixed m-auto top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20 outline-none h-full w-full -ml-2',
               { container: !noContainer },
               containerClassName
            )}
         >
            <div
               className={classNames(
                  'border-2 border-secondary-light rounded-xl p-4 bg-white overflow-auto absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 max-h-[calc(100%-80px)] w-[calc(100%-80px)]',
                  className
               )}
            >
               {props.children}
            </div>
         </div>
      </ModalUnstyled>
   )
})

type Props = {
   noContainer?: boolean
   containerClassName?: string
}

export default Modal
