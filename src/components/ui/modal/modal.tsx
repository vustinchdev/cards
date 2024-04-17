import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { CloseIcon } from '@/assets'
import * as DialogPrimitive from '@radix-ui/react-dialog'

import s from './modal.module.scss'

export type ModalProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Content>

export const ModalContent = forwardRef<ElementRef<typeof DialogPrimitive.Content>, ModalProps>(
  ({ children, ...rest }, ref) => {
    const classNames = {
      closeButton: s.closeButton,
      content: s.content,
      overlay: s.overlay,
    }

    return (
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className={classNames.overlay} />
        <DialogPrimitive.Content {...rest} ref={ref}>
          {children}
          <DialogPrimitive.Close aria-label={'Close'} className={classNames.closeButton}>
            <CloseIcon />
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    )
  }
)

export const Modal = DialogPrimitive.Root
export const ModalTrigger = DialogPrimitive.Trigger
