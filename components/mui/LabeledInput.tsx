import React from 'react'
import classNames from 'classnames'
import FormControlUnstyled, {
   FormControlUnstyledState,
   FormControlUnstyledProps,
} from '@mui/base/FormControlUnstyled'
import { InputUnstyledProps } from '@mui/base'

import Input from 'components/mui/Input'

const LabeledInput = React.forwardRef(function LabedInput(
   { className, ...props }: InputUnstyledProps & Props,
   ref: React.ForwardedRef<HTMLDivElement>
) {
   return (
      <FormControlUnstyled ref={ref} className={className}>
         <label className="inline-block normal-case pb-1">{props.label}</label>
         <Input {...props} />
      </FormControlUnstyled>
   )
})

type Props = {
   label: string
}

export default LabeledInput
