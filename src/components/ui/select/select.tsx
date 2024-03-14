import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { ArrowIcon } from '@/assets/icons'
import * as SelectPrimitive from '@radix-ui/react-select'

import { Typography } from '../typography'

type SelectProps = {
  label?: string
  placeholder?: string
} & ComponentPropsWithoutRef<typeof SelectPrimitive.Root>

export const Select = forwardRef<ElementRef<typeof SelectPrimitive.Root>, SelectProps>(
  ({ children, label, placeholder, ...rest }, ref) => {
    return (
      <div>
        {label && (
          <Typography as={'label'} variant={'body2'}>
            {label}
          </Typography>
        )}
        <SelectPrimitive.Root {...rest}>
          <SelectPrimitive.Trigger ref={ref}>
            <SelectPrimitive.Value placeholder={placeholder} />
            <ArrowIcon />
          </SelectPrimitive.Trigger>
          <SelectPrimitive.Portal>
            <SelectPrimitive.Content>
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
  ({ children, ...rest }, ref) => {
    return (
      <SelectPrimitive.Item {...rest} ref={ref}>
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      </SelectPrimitive.Item>
    )
  }
)
