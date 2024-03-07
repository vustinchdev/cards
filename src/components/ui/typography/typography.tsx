import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

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

  return (
    <Component className={`${s[variant]} ${className}`} {...rest}>
      {children}
    </Component>
  )
}
