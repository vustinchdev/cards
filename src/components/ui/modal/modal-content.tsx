import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as DialogPrimitive from '@radix-ui/react-dialog'

import s from './modal.module.scss'

export type ModalProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Content>

export const ModalContent = forwardRef<ElementRef<typeof DialogPrimitive.Content>, ModalProps>(
  ({ children, ...rest }, ref) => {
    const classNames = {
      content: s.content,
      overlay: s.overlay,
    }

    return (
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className={classNames.overlay} />
        <DialogPrimitive.Content {...rest} className={classNames.content} ref={ref}>
          {children}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    )
  }
)

export const Modal = DialogPrimitive.Root
export const ModalTrigger = DialogPrimitive.Trigger
