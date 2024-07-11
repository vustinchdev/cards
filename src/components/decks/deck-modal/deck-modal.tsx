import { useForm } from 'react-hook-form'

import { ImageUploader } from '@/common'
import { DeckModalTitle, Dialog, FormCheckbox, FormInput } from '@/components'
import { deckModalFormSchema } from '@/schemas'
import { Deck } from '@/services'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

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

  const handleDataConfirm = handleSubmit(data => {
    onSubmit(data)
  })

  const handleFileChange = (fieldName: FieldNames) => (file: File | null) => {
    setValue(fieldName, file)
  }

  return (
    <Dialog onConfirm={handleDataConfirm} title={title}>
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
