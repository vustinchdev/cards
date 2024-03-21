import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Input, InputProps } from '@/components'

type Props<T extends FieldValues> = UseControllerProps<T> & Omit<InputProps, 'onChange' | 'value'>

export const FormInput = <T extends FieldValues>({
  control,
  disabled,
  name,
  shouldUnregister,
  ...rest
}: Props<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    disabled,
    name,
    shouldUnregister,
  })

  return <Input {...field} {...rest} errorMessage={error?.message} />
}
