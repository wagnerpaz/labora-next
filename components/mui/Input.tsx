import React from 'react'
import classNames from 'classnames'
import InputUnstyled, { InputUnstyledProps } from '@mui/base/InputUnstyled'

const Input = React.forwardRef(function Button(
   { className, inputClassName = '', ...props }: InputUnstyledProps & Props,
   ref: React.ForwardedRef<HTMLDivElement>
) {
   return (
      <InputUnstyled
         {...props}
         className={className}
         componentsProps={{
            input: () => ({
               className: classNames(
                  'border-2 border-secondary-light rounded-md p-2 focus:outline-primary w-full mb-2',
                  inputClassName
               ),
            }),
         }}
         ref={ref}
      />
   )
})

type Props = {
   inputClassName?: string
}

export default Input
