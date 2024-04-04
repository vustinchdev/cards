import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as TabsPrimitive from '@radix-ui/react-tabs'
import clsx from 'clsx'

import s from './tabs.module.scss'

export type TabsProps = ComponentPropsWithoutRef<typeof TabsPrimitive.Root>

export const Tabs = forwardRef<ElementRef<typeof TabsPrimitive.Root>, TabsProps>(
  ({ children, ...rest }, ref) => {
    return (
      <TabsPrimitive.Root {...rest} ref={ref}>
        {children}
      </TabsPrimitive.Root>
    )
  }
)

export type TabsTriggerProps = ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>

export const TabsTrigger = forwardRef<ElementRef<typeof TabsPrimitive.Trigger>, TabsTriggerProps>(
  ({ children, ...rest }, ref) => {
    const classNames = {
      trigger: s.trigger,
    }

    return (
      <TabsPrimitive.Trigger className={classNames.trigger} {...rest} ref={ref}>
        {children}
      </TabsPrimitive.Trigger>
    )
  }
)

export type TabsListProps = ComponentPropsWithoutRef<typeof TabsPrimitive.List>

export const TabsList = forwardRef<ElementRef<typeof TabsPrimitive.List>, TabsListProps>(
  ({ children, className, ...rest }, ref) => {
    const classNames = {
      list: clsx(s.list, className),
    }

    return (
      <TabsPrimitive.List className={classNames.list} {...rest} ref={ref}>
        {children}
      </TabsPrimitive.List>
    )
  }
)

export type TabsContentProps = ComponentPropsWithoutRef<typeof TabsPrimitive.Content>

export const TabsContent = forwardRef<ElementRef<typeof TabsPrimitive.Content>, TabsContentProps>(
  ({ children, ...rest }, ref) => {
    return (
      <TabsPrimitive.Content {...rest} ref={ref}>
        {children}
      </TabsPrimitive.Content>
    )
  }
)
