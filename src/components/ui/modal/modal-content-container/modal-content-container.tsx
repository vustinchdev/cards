import { ComponentPropsWithoutRef, forwardRef } from 'react'

import clsx from 'clsx'

import s from './modal-content-container.module.scss'

export type ModalContentContainerProps = ComponentPropsWithoutRef<'div'>

export const ModalContentContainer = forwardRef<HTMLDivElement, ModalContentContainerProps>(
  ({ className, ...rest }, ref) => {
    const classNames = {
      root: clsx(s.root, className),
    }

    return <div {...rest} className={classNames.root} ref={ref} />
  }
)
