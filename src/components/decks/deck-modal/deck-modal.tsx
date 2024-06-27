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

type Title = 'Add New Deck' | 'Delete Deck' | 'Edit Deck'

type Props = {
  title: Title
}

export const DeckModal = ({ title }: Props) => {
  return (
    <Modal>
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
        <ModalContentContainer>Deck Modal Form</ModalContentContainer>
        <ModalFooter>
          <Button variant={'secondary'}>Cancel</Button>
          <Button>{title}</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
