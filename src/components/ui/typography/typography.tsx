import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import clsx from 'clsx'

import s from './typography.module.scss'

export type TypographyProps<T extends ElementType = 'h1'> = {
  as?: T
  children?: ReactNode
  className?: string
  variant?:
    | 'body1'
    | 'body2'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'link1'
    | 'link2'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2'
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'h1'>(props: TypographyProps<T>) => {
  const { as: Component = 'h1', children, className, variant = 'h1', ...rest } = props
  const classNames = {
    root: clsx(s[variant], className),
  }

  return (
    <Component className={classNames.root} {...rest}>
      {children}
    </Component>
  )
}
