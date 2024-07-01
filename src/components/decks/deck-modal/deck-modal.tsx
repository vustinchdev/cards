import { useState } from 'react'

import { Edit2Outline, TrashOutlineIcon } from '@/assets'
import {
  Button,
  Modal,
  ModalContent,
  ModalContentContainer,
  ModalFooter,
  ModalHeader,
  ModalTrigger,
} from '@/components'
import { CreateDeckArgs, Deck } from '@/services'

import { DeckModalForm } from './deck-modal-form'

export type DeckModalTitle = 'Add New Deck' | 'Delete Deck' | 'Edit Deck'

type Props = {
  deck?: Deck
  onSubmit: (data: CreateDeckArgs) => void
  title: DeckModalTitle
}

export const DeckModal = ({ deck, onSubmit, title }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleDataConfirm = (data: CreateDeckArgs) => {
    onSubmit(data)
  }

  const handleCancel = () => {
    setIsOpen(false)
  }

  return (
    <Modal onOpenChange={setIsOpen} open={isOpen}>
      {title === 'Add New Deck' && (
        <ModalTrigger asChild>
          <Button>Add New Deck</Button>
        </ModalTrigger>
      )}
      {title === 'Delete Deck' && (
        <ModalTrigger asChild>
          <Button variant={'icon'}>
            <TrashOutlineIcon />
          </Button>
        </ModalTrigger>
      )}
      {title === 'Edit Deck' && (
        <ModalTrigger asChild>
          <Button variant={'icon'}>
            <Edit2Outline />
          </Button>
        </ModalTrigger>
      )}
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
