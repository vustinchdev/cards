import { useForm } from 'react-hook-form'

import { Button, Card, FormInput, Typography } from '@/components'
import { passwordSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

import s from './create-new-password.module.scss'

type FormValues = z.infer<typeof passwordSchema>
type Props = {
  onSubmit: ({ password }: FormValues) => void
}

export const CreateNewPassword = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: { confirmPassword: '', password: '' },
    resolver: zodResolver(passwordSchema),
  })

  const classNames = {
    card: s.card,
    instructions: s.instructions,
    password: s.password,
    title: s.title,
  }

  return (
    <Card as={'form'} className={classNames.card} onSubmit={handleSubmit(onSubmit)}>
      <Typography className={classNames.title} variant={'h1'}>
        Create new password
      </Typography>
      <FormInput
        className={classNames.password}
        control={control}
        label={'Password'}
        name={'password'}
        placeholder={'YourPassword123'}
        type={'password'}
      />
      <FormInput
        control={control}
        label={'Confirm Password'}
        name={'confirmPassword'}
        placeholder={'YourPassword123'}
        type={'password'}
      />
      <Typography className={classNames.instructions} variant={'body2'}>
        Create new password and we will send you further instructions to email
      </Typography>
      <Button fullWidth type={'submit'}>
        Create New Password
      </Button>
    </Card>
  )
}
