import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { ImageUploader } from '@/common'
import {
  DeckModalTrigger,
  FormCheckbox,
  FormInput,
  Modal,
  ModalContent,
  ModalContentContainer,
  ModalFooter,
  ModalHeader,
} from '@/components'
import { deckModalFormSchema } from '@/schemas'
import { Deck } from '@/services'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export type DeckModalTitle = 'Add New Deck' | 'Delete Deck' | 'Edit Deck'
export type DeckDataConfirm = z.infer<typeof deckModalFormSchema>

type Props = {
  deck?: Deck
  onSubmit: (data: DeckDataConfirm) => void
  title: DeckModalTitle
}

type FieldNames = 'cover' | 'isPrivate' | 'name'

export const DeckModal = ({ deck, onSubmit, title }: Props) => {
  const { control, handleSubmit, setValue } = useForm<DeckDataConfirm>({
    defaultValues: {
      isPrivate: deck?.isPrivate ? deck?.isPrivate : false,
      name: deck?.name ?? '',
    },
    resolver: zodResolver(deckModalFormSchema),
  })

  const [isOpen, setIsOpen] = useState(false)

  const handleDataConfirm = handleSubmit(data => {
    onSubmit(data)
    setIsOpen(false)
  })

  const handleFileChange = (fieldName: FieldNames) => (file: File | null) => {
    setValue(fieldName, file)
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
          <form onSubmit={handleDataConfirm}>
            <FormInput control={control} label={'Deck Name'} name={'name'} />
            <ImageUploader handleChangeFile={handleFileChange('cover')} imageKey={'cover'} />
            <FormCheckbox control={control} label={'Private deck'} name={'isPrivate'} />
          </form>
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
