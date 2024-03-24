import { ComponentPropsWithoutRef, ElementRef, forwardRef, useId } from 'react'

import { ArrowIcon } from '@/assets'
import * as SelectPrimitive from '@radix-ui/react-select'
import clsx from 'clsx'

import s from './select.module.scss'

type SelectProps = {
  className?: string
  externalId?: string
  label?: string
  placeholder?: string
} & ComponentPropsWithoutRef<typeof SelectPrimitive.Root>

export const Select = forwardRef<ElementRef<typeof SelectPrimitive.Root>, SelectProps>(
  ({ children, className, disabled, externalId, label, placeholder, ...rest }, ref) => {
    const id = useId()
    const finalId = externalId ?? id

    const classNames = {
      content: s.content,
      icon: s.icon,
      item: s.item,
      label: clsx(s.label, disabled && s.disabledLabel),
      trigger: s.trigger,
    }

    return (
      <div className={className}>
        {label && (
          <label className={classNames.label} htmlFor={finalId}>
            {label}
          </label>
        )}
        <SelectPrimitive.Root disabled={disabled} {...rest}>
          <SelectPrimitive.Trigger className={classNames.trigger} id={finalId} ref={ref}>
            <SelectPrimitive.Value placeholder={placeholder} />
            <ArrowIcon className={classNames.icon} />
          </SelectPrimitive.Trigger>
          <SelectPrimitive.Portal>
            <SelectPrimitive.Content className={classNames.content} position={'popper'}>
              <SelectPrimitive.Viewport>
                <SelectPrimitive.Group>{children}</SelectPrimitive.Group>
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
