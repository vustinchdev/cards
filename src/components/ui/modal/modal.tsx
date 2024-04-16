import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { CloseIcon } from '@/assets'
import * as DialogPrimitive from '@radix-ui/react-dialog'

export type ModalProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Content>

export const ModalContent = forwardRef<ElementRef<typeof DialogPrimitive.Content>, ModalProps>(
  ({ children, ...rest }, ref) => (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay />
      <DialogPrimitive.Content {...rest} ref={ref}>
        {children}
        <DialogPrimitive.Close aria-label={'Close'}>
          <CloseIcon />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )
)

export const Modal = DialogPrimitive.Root
export const ModalTrigger = DialogPrimitive.Trigger
