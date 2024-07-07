import { ComponentPropsWithoutRef, forwardRef } from 'react'

import clsx from 'clsx'

import s from './modal-footer.module.scss'

import { Button } from '../../button'

export type ModalFooterProps = {
  cancelText: string
  onCancel: () => void
  onConfirm: () => void
  title: string
} & ComponentPropsWithoutRef<'div'>

export const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ cancelText, className, onCancel, onConfirm, title, ...rest }, ref) => {
    const classNames = {
      root: clsx(s.root, className),
    }

    const handleCancel = () => {
      onCancel()
    }

    const handleConfirm = () => {
      onConfirm()
    }

    return (
      <div {...rest} className={classNames.root} ref={ref}>
        <Button onClick={handleCancel}>{cancelText}</Button>
        <Button onClick={handleConfirm}>{title}</Button>
      </div>
    )
  }
)
