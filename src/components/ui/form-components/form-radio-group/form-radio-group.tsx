import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { RadioGroup, RadioGroupProps } from '@/components'

type Props<T extends FieldValues> = UseControllerProps<T> &
  Omit<RadioGroupProps, 'name' | 'onChange' | 'value'>

export const FormRadioGroup = <T extends FieldValues>({
  control,
  disabled,
  name,
  shouldUnregister,
  ...rest
}: Props<T>) => {
  const {
    field: { onChange, ref, ...field },
    fieldState: { error },
  } = useController({
    control,
    disabled,
    name,
    shouldUnregister,
  })

  return (
    <RadioGroup
      {...field}
      {...rest}
      errorMessage={error?.message}
      onValueChange={onChange}
      ref={ref}
    />
  )
}
