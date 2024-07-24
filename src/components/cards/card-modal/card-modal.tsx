import { useForm } from 'react-hook-form'

import { ImageUploader } from '@/common'
import { Dialog, FormInput, ModalTitle, Typography } from '@/components/ui'
import { cardScheme } from '@/schemas'
import { CardResponse } from '@/services'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export type CardDataConfrim = z.infer<typeof cardScheme>

type FieldNames = 'answer' | 'answerImg' | 'question' | 'questionImg'

type Props = {
  card?: CardResponse
  onSubmit: (data: CardDataConfrim) => void
  title: ModalTitle
}

export const CardModal = ({ card, onSubmit, title }: Props) => {
  const { control, handleSubmit, setValue } = useForm<CardDataConfrim>({
    defaultValues: {
      answer: card?.answer ? card.answer : '',
      answerImg: null,
      question: card?.question ? card.question : '',
      questionImg: null,
    },
    resolver: zodResolver(cardScheme),
  })
  const handleDataConfirm = handleSubmit(data => {
    onSubmit(data)
  })

  const handleFileChange = (fieldName: FieldNames) => (file: File | null) => {
    setValue(fieldName, file)
  }

  return (
    <Dialog onConfirm={handleDataConfirm} title={title}>
      <form>
        <Typography variant={'subtitle2'}>Question:</Typography>
        <FormInput control={control} label={'Question'} name={'question'} />
        <ImageUploader
          card={card}
          handleChangeFile={handleFileChange('questionImg')}
          imageKey={'questionImg'}
        />
        <Typography variant={'subtitle2'}>Answer:</Typography>
        <FormInput control={control} label={'Answer'} name={'answer'} />
        <ImageUploader
          card={card}
          handleChangeFile={handleFileChange('answerImg')}
          imageKey={'answerImg'}
        />
      </form>
    </Dialog>
  )
}
