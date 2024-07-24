import { useState } from 'react'

import {
  DeckModalTrigger,
  Modal,
  ModalContent,
  ModalContentContainer,
  ModalContentContainerProps,
  ModalFooter,
  ModalHeader,
} from '@/components'
export type ModalTitle = 'Add New Card' | 'Add New Deck' | 'Delete Deck' | 'Edit Card' | 'Edit Deck'

type Props = {
  onConfirm: () => void
  title: ModalTitle
} & ModalContentContainerProps

export const Dialog = ({ children, onConfirm, title }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleCancel = () => {
    setIsOpen(false)
  }

  const handleDataConfirm = () => {
    onConfirm()
    setIsOpen(false)
  }

  return (
    <Modal onOpenChange={setIsOpen} open={isOpen}>
      <DeckModalTrigger title={title} />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalContentContainer>{children}</ModalContentContainer>
        <ModalFooter
          cancelText={'Cancel'}
          onCancel={handleCancel}
          onConfirm={handleDataConfirm}
          title={title}
        />
      </ModalContent>
    </Modal>
  )
}
