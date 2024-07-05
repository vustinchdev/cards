import { useForm } from 'react-hook-form'

import { ImageUploader } from '@/common'
import { FormCheckbox, FormInput } from '@/components'
import { AddDeckModalFormSchema } from '@/schemas'
import { CreateDeckArgs, Deck } from '@/services'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

type Props = {
  deck?: Deck
  onOpenChange: (isOpen: boolean) => void
  onSubmit: (data: CreateDeckArgs) => void
}

type FormValues = z.infer<typeof AddDeckModalFormSchema>
type FieldNames = 'cover' | 'isPrivate' | 'name'

export const DeckModalForm = ({ deck, onOpenChange, onSubmit }: Props) => {
  const { control, handleSubmit, setValue } = useForm<FormValues>({
    defaultValues: {
      isPrivate: deck?.isPrivate ? deck?.isPrivate : false,
      name: deck?.name ?? '',
    },
    resolver: zodResolver(AddDeckModalFormSchema),
  })

  const onDataConfirm = (data: CreateDeckArgs) => {
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
