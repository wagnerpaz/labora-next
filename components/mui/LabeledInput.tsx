import React from 'react'
import FormControlUnstyled from '@mui/base/FormControlUnstyled'
import { InputUnstyledProps } from '@mui/base'

import Input from 'components/mui/Input'

const LabeledInput = React.forwardRef(function LabedInput(
   { className, multiline = false, rows, ...props }: InputUnstyledProps & Props,
   ref: React.ForwardedRef<HTMLDivElement>
) {
   return (
      <FormControlUnstyled ref={ref} className={className} {...props}>
         <label className="inline-block normal-case pb-1">{props.label}</label>
         <Input multiline={multiline as true} rows={rows} />
      </FormControlUnstyled>
   )
})

type Props = {
   label: string
}

export default LabeledInput
