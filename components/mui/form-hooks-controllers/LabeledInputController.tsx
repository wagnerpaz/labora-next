import React from 'react'
import { Controller } from 'react-hook-form'
import LabeledInput from '../LabeledInput'

const LabeledInputController = ({
   control,
   label,
   name,
   value = '',
   onChange = () => {},
   ...props
}) => {
   return (
      <Controller
         name={name}
         control={control}
         render={({ field: { value, onChange } }) => (
            <LabeledInput
               {...props}
               label={label}
               value={value}
               onChange={onChange}
            />
         )}
      />
   )
}

export default LabeledInputController
