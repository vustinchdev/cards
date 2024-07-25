import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { ImageUploader } from '@/common'
import { Dialog, FormCheckbox, FormInput, ModalTitle } from '@/components'
import { deckModalFormSchema } from '@/schemas'
import { Deck } from '@/services'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export type DeckDataConfirm = z.infer<typeof deckModalFormSchema>

type Props = {
  deck?: Deck
  onSubmit: (data: DeckDataConfirm) => void
  title: ModalTitle
}

type FieldNames = 'cover' | 'isPrivate' | 'name'

export const DeckModal = ({ deck, onSubmit, title }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const { control, handleSubmit, reset, setValue } = useForm<DeckDataConfirm>({
    defaultValues: {
      isPrivate: deck?.isPrivate ? deck?.isPrivate : false,
      name: deck?.name ?? '',
    },
    resolver: zodResolver(deckModalFormSchema),
  })

  const handleDataConfirm = handleSubmit(data => {
    onSubmit(data)
    setIsOpen(false)
    reset()
  })

  const handleFileChange = (fieldName: FieldNames) => (file: File | null) => {
    setValue(fieldName, file)
  }

  return (
    <Dialog isOpen={isOpen} onConfirm={handleDataConfirm} onOpenChange={setIsOpen} title={title}>
      <form onSubmit={handleDataConfirm}>
        <FormInput control={control} label={'Deck Name'} name={'name'} />
        <ImageUploader
          deck={deck}
          handleChangeFile={handleFileChange('cover')}
          imageKey={'cover'}
        />
        <FormCheckbox control={control} label={'Private deck'} name={'isPrivate'} />
      </form>
    </Dialog>
  )
}
