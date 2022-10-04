import React, { ForwardedRef } from 'react'
import classNames from 'classnames'

const BackdropUnstyled: React.FC<BackdropUnstyledProps> = React.forwardRef<
   HTMLDivElement,
   BackdropUnstyledProps
>(function Backdrop(props, ref) {
   const { open, className, ...other } = props
   return (
      <div
         className={classNames({ 'MuiBackdrop-open': open }, className)}
         ref={ref}
         {...other}
      />
   )
})

type BackdropUnstyledProps = {
   open?: boolean
   className?: string
   ref: ForwardedRef<HTMLDivElement>
}

const Backdrop = React.forwardRef<HTMLDivElement, Props>(function Backdrop(
   props,
   ref
) {
   return (
      <BackdropUnstyled
         {...props}
         className="fixed inset-0 bg-secondary-dark opacity-50 z-10"
         ref={ref}
      />
   )
})

type Props = {}

export default Backdrop
