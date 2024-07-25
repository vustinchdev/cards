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
  isOpen: boolean
  onConfirm: () => void
  onOpenChange: (isOpen: boolean) => void
  title: ModalTitle
} & ModalContentContainerProps

export const Dialog = ({ children, isOpen, onConfirm, onOpenChange, title }: Props) => {
  const handleCancel = () => {
    onOpenChange(false)
  }

  const handleDataConfirm = () => {
    onConfirm()
  }

  return (
    <Modal onOpenChange={onOpenChange} open={isOpen}>
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
