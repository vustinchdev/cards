import { ComponentPropsWithoutRef, forwardRef } from 'react'

import clsx from 'clsx'

import s from './modal-footer.module.scss'

export type ModalFooterProps = ComponentPropsWithoutRef<'div'>

export const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ className, ...rest }, ref) => {
    const classNames = {
      root: clsx(s.root, className),
    }

    return <div {...rest} className={classNames.root} ref={ref} />
  }
)
