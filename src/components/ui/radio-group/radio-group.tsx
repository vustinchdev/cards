import { ComponentPropsWithoutRef, ElementRef, forwardRef, useId } from 'react'

import * as RagioGroupPrimitive from '@radix-ui/react-radio-group'

export type RadioGroupProps = {
  errorMessage?: string
} & ComponentPropsWithoutRef<typeof RagioGroupPrimitive.Root>

export const RadioGroup = forwardRef<ElementRef<typeof RagioGroupPrimitive.Root>, RadioGroupProps>(
  ({ children, ...rest }, ref) => {
    return (
      <RagioGroupPrimitive.Root ref={ref} {...rest}>
        {children}
      </RagioGroupPrimitive.Root>
    )
  }
)

export type RadioGroupItemProps = ComponentPropsWithoutRef<typeof RagioGroupPrimitive.Item>

export const RadioGroupItem = forwardRef<
  ElementRef<typeof RagioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ children, id: externalId, value, ...rest }, ref) => {
  const id = useId()
  const finalId = externalId ?? id

  return (
    <div>
      <RagioGroupPrimitive.Item id={finalId} ref={ref} value={value} {...rest}>
        <RagioGroupPrimitive.Indicator />
      </RagioGroupPrimitive.Item>
      <label htmlFor={finalId}>{children}</label>
    </div>
  )
})
