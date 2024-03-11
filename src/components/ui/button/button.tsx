import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { BackArrowIcon } from '@/assets/icons'
import clsx from 'clsx'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  back?: boolean
  children: ReactNode
  className?: string
  fullWidth?: boolean
  variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const {
    as: Component = 'button',
    back,
    children,
    className,
    fullWidth,
    variant = 'primary',
    ...rest
  } = props

  const classNames = {
    root: clsx(s[variant], fullWidth && s.fullWidth, className),
  }

  return (
    <Component className={classNames.root} {...rest}>
      {back && <BackArrowIcon />} {children}
    </Component>
  )
}
