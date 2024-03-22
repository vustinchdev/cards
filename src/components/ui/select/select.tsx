import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { ArrowIcon } from '@/assets'
import { Typography } from '@/components'
import * as SelectPrimitive from '@radix-ui/react-select'
import clsx from 'clsx'

import s from './select.module.scss'

export type SelectOption = {
  title: string
  value: string
}

type SelectProps = {
  className?: string
  label?: string
  options?: SelectOption[]
  placeholder?: string
} & ComponentPropsWithoutRef<typeof SelectPrimitive.Root>

export const Select = forwardRef<ElementRef<typeof SelectPrimitive.Root>, SelectProps>(
  ({ children, className, disabled, label, options, placeholder, ...rest }, ref) => {
    const classNames = {
      content: s.content,
      icon: s.icon,
      item: s.item,
      label: clsx(s.label, disabled && s.disabledLabel),
      trigger: s.trigger,
    }

    const selectOptions = options?.map(option => (
      <SelectItem key={option.value} value={option.value}>
        {option.title}
      </SelectItem>
    ))

    return (
      <div className={className}>
        {label && <label className={classNames.label}>{label}</label>}
        <SelectPrimitive.Root disabled={disabled} {...rest}>
          <SelectPrimitive.Trigger className={classNames.trigger} ref={ref}>
            <SelectPrimitive.Value placeholder={placeholder} />
            <ArrowIcon className={classNames.icon} />
          </SelectPrimitive.Trigger>
          <SelectPrimitive.Portal>
            <SelectPrimitive.Content
              className={classNames.content}
              position={'popper'}
              side={'bottom'}
            >
              <SelectPrimitive.Viewport>
                <SelectPrimitive.Group>{selectOptions}</SelectPrimitive.Group>
              </SelectPrimitive.Viewport>
            </SelectPrimitive.Content>
          </SelectPrimitive.Portal>
        </SelectPrimitive.Root>
      </div>
    )
  }
)

type SelectItemProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Item>

export const SelectItem = forwardRef<ElementRef<typeof SelectPrimitive.Item>, SelectItemProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <SelectPrimitive.Item {...rest} className={clsx(s.item, className)} ref={ref}>
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      </SelectPrimitive.Item>
    )
  }
)
