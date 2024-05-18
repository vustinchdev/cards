import { ComponentPropsWithoutRef, ElementRef, ElementType, ForwardedRef, forwardRef } from 'react'

import clsx from 'clsx'

import s from './card.module.scss'

export type CardProps<T extends ElementType> = {
  as?: T
} & ComponentPropsWithoutRef<T>

type InferType<T> = T extends ElementType<infer U> ? U : never

const CardPolymorph = <T extends ElementType>(
  props: CardProps<T>,
  ref: ForwardedRef<InferType<T>>
) => {
  const { as: Component = 'div', className, ...rest } = props
  const classNames = {
    root: clsx(s.root, className),
  }

  return <Component className={classNames.root} ref={ref} {...rest} />
}

export const Card = forwardRef(CardPolymorph) as <T extends ElementType = 'div'>(
  props: CardProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof CardProps<T>> & {
      ref?: ForwardedRef<ElementRef<T>>
    }
) => ReturnType<typeof CardPolymorph>
