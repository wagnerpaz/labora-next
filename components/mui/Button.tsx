import React from 'react'
import classNames from 'classnames'
import ButtonUnstyled, {
   ButtonUnstyledOwnerState,
   ButtonUnstyledProps,
} from '@mui/base/ButtonUnstyled'
import { twMerge } from 'tailwind-merge'

const Button = React.forwardRef(function Button(
   { className, loading, children, ...props }: ButtonUnstyledProps & Props,
   ref: React.ForwardedRef<HTMLButtonElement>
) {
   return (
      <ButtonUnstyled
         {...props}
         componentsProps={{
            root: (state: ButtonUnstyledOwnerState) => ({
               className: twMerge(
                  classNames(
                     'uppercase transition-colors min-w-[100px]',
                     {
                        'text-secondary-dark hover:text-secondary-light':
                           !props.variant || props.variant === 'text',
                        'text-primary-a11y hover:text-secondary-dark bg-primary p-1 rounded-md border-2 border-primary':
                           props.variant === 'contained',
                        'text-primary hover:text-secondary-light p-1 rounded-md border-2 border-primary':
                           props.variant === 'outline',
                        'text-xs p-1': props.size === 'sm',
                     },
                     className
                  )
               ),
            }),
         }}
         ref={ref}
      >
         <div className="flex items-center justify-center">
            {loading && <div className="loader-xs align-middle mr-2" />}
            <span>{children}</span>
         </div>
      </ButtonUnstyled>
   )
})

type Props = {
   variant: 'text' | 'contained' | 'outline'
   size?: 'sm' | 'md'
   loading?: boolean
}

export default Button
