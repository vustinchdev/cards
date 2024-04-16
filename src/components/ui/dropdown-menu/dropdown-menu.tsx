import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'

import s from './dropdown-menu.module.scss'
export const DropdownMenu = DropdownMenuPrimitive.Root
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

export type DropdownMenuContentProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Content
>

export const DropdownMenuContent = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Content>,
  DropdownMenuContentProps
>(({ children, className, ...rest }, ref) => {
  const classNames = {
    arrow: s.arrow,
    content: clsx(s.content, className),
  }

  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content className={classNames.content} {...rest} ref={ref}>
        {children}
        <div className={classNames.arrow} />
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Portal>
  )
})

export type DropdownMenuLabelProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label>

export const DropdownMenuLabel = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Label>,
  DropdownMenuLabelProps
>(({ className, ...rest }, ref) => {
  const classNames = {
    label: clsx(s.label, className),
  }

  return <DropdownMenuPrimitive.Label className={classNames.label} {...rest} ref={ref} />
})

export type DropdownMenuItemProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>

export const DropdownMenuItem = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Item>,
  DropdownMenuItemProps
>(({ className, ...rest }, ref) => {
  const classNames = {
    item: clsx(s.item, className),
  }

  return <DropdownMenuPrimitive.Item className={classNames.item} {...rest} ref={ref} />
})

export type DropdownMenuSeparatorProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Separator
>
export const DropdownMenuSeparator = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Separator>,
  DropdownMenuSeparatorProps
>(({ className, ...rest }, ref) => {
  const classNames = {
    separator: clsx(s.separator, className),
  }

  return <DropdownMenuPrimitive.Separator className={classNames.separator} {...rest} ref={ref} />
})
