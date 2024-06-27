import { useForm } from 'react-hook-form'

import { FormCheckbox, FormInput } from '@/components'
import { deckModalFormSchema } from '@/schemas'
import { z } from 'zod'

import { Deck } from '../../decks-table'

type Props = {
  deck?: Deck
}

type FormValues = z.infer<typeof deckModalFormSchema>

export const DeckModalForm = ({ deck }: Props) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      isPrivate: deck?.isPrivate ? deck?.isPrivate : false,
      name: deck?.name ?? '',
    },
  })

  return (
    <form onSubmit={handleSubmit(() => {})}>
      <FormInput control={control} label={'Deck Name'} name={'name'} />
      <input type={'file'} />
      <FormCheckbox control={control} label={'Private deck'} name={'isPrivate'} />
    </form>
  )
}
