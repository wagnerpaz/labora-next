import React from 'react'
import classNames from 'classnames'
import InputUnstyledUnstyled, {
   InputUnstyledProps,
} from '@mui/base/InputUnstyled'

const Input = React.forwardRef(function Button(
   props: InputUnstyledProps & Props,
   ref: React.ForwardedRef<HTMLDivElement>
) {
   return (
      <InputUnstyledUnstyled
         {...props}
         componentsProps={{
            input: () => ({
               className: classNames(
                  'border-2 border-secondary-light rounded-md p-2 focus:outline-primary w-full mb-2'
               ),
            }),
         }}
         ref={ref}
      />
   )
})

type Props = {}

export default Input
