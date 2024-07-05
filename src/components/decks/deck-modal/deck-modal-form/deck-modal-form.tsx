import { useForm } from 'react-hook-form'

import { ImageUploader } from '@/common'
import { DeckDataConfirm, FormCheckbox, FormInput } from '@/components'
import { deckModalFormSchema } from '@/schemas'
import { Deck } from '@/services'
import { zodResolver } from '@hookform/resolvers/zod'

type Props = {
  deck?: Deck
  onOpenChange: (isOpen: boolean) => void
  onSubmit: (data: DeckDataConfirm) => void
}

type FieldNames = 'cover' | 'isPrivate' | 'name'

export const DeckModalForm = ({ deck, onOpenChange, onSubmit }: Props) => {
  const { control, handleSubmit, setValue } = useForm<DeckDataConfirm>({
    defaultValues: {
      isPrivate: deck?.isPrivate ? deck?.isPrivate : false,
      name: deck?.name ?? '',
    },
    resolver: zodResolver(deckModalFormSchema),
  })

  const onDataConfirm = (data: DeckDataConfirm) => {
    onSubmit(data)
    onOpenChange(false)
  }

  const handleFileChange = (fieldName: FieldNames) => (file: File | null) => {
    setValue(fieldName, file)
  }

  return (
    <form id={'deck-form'} onSubmit={handleSubmit(onDataConfirm)}>
      <FormInput control={control} label={'Deck Name'} name={'name'} />
      <ImageUploader handleChangeFile={handleFileChange('cover')} imageKey={'cover'} />
      <FormCheckbox control={control} label={'Private deck'} name={'isPrivate'} />
    </form>
  )
}
