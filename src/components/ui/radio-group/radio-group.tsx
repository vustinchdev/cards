import { ComponentPropsWithoutRef, ElementRef, forwardRef, useId } from 'react'

import * as RagioGroupPrimitive from '@radix-ui/react-radio-group'
import clsx from 'clsx'

import s from './radio-group.module.scss'

export type RadioGroupProps = {
  errorMessage?: string
} & ComponentPropsWithoutRef<typeof RagioGroupPrimitive.Root>

const classNames = {
  container: s.container,
  indicator: s.indicator,
  item: (className: string | undefined) => clsx(s.item, className),
  label: s.label,
  root: (className: string | undefined) => clsx(s.root, className),
}

export const RadioGroup = forwardRef<ElementRef<typeof RagioGroupPrimitive.Root>, RadioGroupProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <RagioGroupPrimitive.Root className={classNames.root(className)} ref={ref} {...rest}>
        {children}
      </RagioGroupPrimitive.Root>
    )
  }
)

export type RadioGroupItemProps = ComponentPropsWithoutRef<typeof RagioGroupPrimitive.Item>

export const RadioGroupItem = forwardRef<
  ElementRef<typeof RagioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ children, className, id: externalId, value, ...rest }, ref) => {
  const id = useId()
  const finalId = externalId ?? id

  return (
    <div className={classNames.container}>
      <RagioGroupPrimitive.Item
        className={classNames.item(className)}
        id={finalId}
        ref={ref}
        value={value}
        {...rest}
      >
        <RagioGroupPrimitive.Indicator className={classNames.indicator} />
      </RagioGroupPrimitive.Item>
      <label className={classNames.label} htmlFor={finalId}>
        {children}
      </label>
    </div>
  )
})
