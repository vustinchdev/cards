import { ComponentPropsWithoutRef } from 'react'

import { CloseIcon } from '@/assets'
import * as DialogPrimitive from '@radix-ui/react-dialog'

import s from './modal-header.module.scss'

type ModalHeaderProps = ComponentPropsWithoutRef<'div'>

export const ModalHeader = ({ children }: ModalHeaderProps) => {
  const classNames = {
    closeButton: s.closeButton,
    header: s.header,
  }

  return (
    <div className={classNames.header}>
      {children}
      <DialogPrimitive.Close aria-label={'Close'} className={classNames.closeButton}>
        <CloseIcon />
      </DialogPrimitive.Close>
    </div>
  )
}
