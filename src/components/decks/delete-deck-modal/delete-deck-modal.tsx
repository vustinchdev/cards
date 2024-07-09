import { useState } from 'react'

import {
  DeckModalTrigger,
  Modal,
  ModalContent,
  ModalContentContainer,
  ModalFooter,
  ModalHeader,
  Typography,
} from '@/components'
import { Deck } from '@/services'

type Props = {
  deck: Deck
  onConfirm: () => void
  title: 'Delete Deck'
}

export const DeleteDeckModal = ({ deck, onConfirm, title }: Props) => {
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
        <ModalContentContainer>
          <Typography>
            Do you really want to remove {deck.name}? All cards will be deleted.
          </Typography>
        </ModalContentContainer>
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
