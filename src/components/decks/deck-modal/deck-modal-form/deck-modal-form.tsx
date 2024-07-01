import { useForm } from 'react-hook-form'

import { FormCheckbox, FormInput } from '@/components'
import { deckModalFormSchema } from '@/schemas'
import { CreateDeckArgs, Deck } from '@/services'
import { z } from 'zod'

type Props = {
  deck?: Deck
  onOpenChange: (isOpen: boolean) => void
  onSubmit: (data: CreateDeckArgs) => void
}

type FormValues = z.infer<typeof deckModalFormSchema>

export const DeckModalForm = ({ deck, onOpenChange, onSubmit }: Props) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      isPrivate: deck?.isPrivate ? deck?.isPrivate : false,
      name: deck?.name ?? '',
    },
  })

  const onDataConfirm = (data: CreateDeckArgs) => {
    onSubmit(data)
    onOpenChange(false)
  }

  return (
    <form id={'deck-form'} onSubmit={handleSubmit(onDataConfirm)}>
      <FormInput control={control} label={'Deck Name'} name={'name'} />
      <input type={'file'} />
      <FormCheckbox control={control} label={'Private deck'} name={'isPrivate'} />
    </form>
  )
}
