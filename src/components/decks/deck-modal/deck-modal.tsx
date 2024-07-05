import { useState } from 'react'

import {
  Button,
  DeckModalTrigger,
  Modal,
  ModalContent,
  ModalContentContainer,
  ModalFooter,
  ModalHeader,
} from '@/components'
import { deckModalFormSchema } from '@/schemas'
import { Deck } from '@/services'
import { z } from 'zod'

import { DeckModalForm } from './deck-modal-form'

export type DeckModalTitle = 'Add New Deck' | 'Delete Deck' | 'Edit Deck'
export type DeckDataConfirm = z.infer<typeof deckModalFormSchema>

type Props = {
  deck?: Deck
  onSubmit: (data: DeckDataConfirm) => void
  title: DeckModalTitle
}

export const DeckModal = ({ deck, onSubmit, title }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleDataConfirm = (data: DeckDataConfirm) => {
    onSubmit(data)
  }

  const handleCancel = () => {
    setIsOpen(false)
  }

  return (
    <Modal onOpenChange={setIsOpen} open={isOpen}>
      <DeckModalTrigger title={title} />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalContentContainer>
          <DeckModalForm deck={deck} onOpenChange={setIsOpen} onSubmit={handleDataConfirm} />
        </ModalContentContainer>
        <ModalFooter>
          <Button onClick={handleCancel} variant={'secondary'}>
            Cancel
          </Button>
          <Button form={'deck-form'} type={'submit'}>
            {title}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
