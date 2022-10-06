import React from 'react'
import classNames from 'classnames'
import ModalUnstyled, { ModalUnstyledProps } from '@mui/base/ModalUnstyled'

import Backdrop from 'components/mui/Backdrop'

const Modal = React.forwardRef(function Modal(
   { className, noContainer, ...props }: ModalUnstyledProps & Props,
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
               'fixed m-auto top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20 p-12 outline-none',
               { container: !noContainer }
            )}
         >
            <div
               className={classNames(
                  'border-2 border-secondary-light rounded-md p-4 bg-white w-full',
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
}

export default Modal
