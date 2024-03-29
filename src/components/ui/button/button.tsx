import {
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  ForwardedRef,
  ReactNode,
  forwardRef,
} from 'react'

import clsx from 'clsx'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  fullWidth?: boolean
  icon?: ReactNode
  variant?: 'icon' | 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

type InferType<T> = T extends ElementType<infer U> ? U : never

const ButtonPolymorph = <T extends ElementType = 'button'>(
  props: ButtonProps<T>,
  ref: ForwardedRef<InferType<T>>
) => {
  const {
    as: Component = 'button',
    back,
    children,
    className,
    fullWidth,
    icon,
    variant = 'primary',
    ...rest
  } = props

  const classNames = {
    root: clsx(s[variant], fullWidth && s.fullWidth, className),
  }

  return (
    <Component className={classNames.root} ref={ref} {...rest}>
      {icon} {children}
    </Component>
  )
}

export const Button = forwardRef(ButtonPolymorph) as <T extends ElementType = 'button'>(
  props: ButtonProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>> & {
      ref?: ForwardedRef<ElementRef<T>>
    }
) => ReturnType<typeof ButtonPolymorph>
