import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { Button, Card, FormInput, Typography } from '@/components'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './forgot-password.module.scss'

type FormValues = z.infer<typeof emailSchema>
const emailSchema = z.object({
  email: z.string().email(),
})

type Props = {
  handlePasswordRecover: (data: FormValues) => void
}

export const ForgotPassword = ({ handlePasswordRecover }: Props) => {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(emailSchema),
  })

  const classNames = {
    caption: s.caption,
    card: s.card,
    instructions: s.instructions,
    link: s.link,
    title: s.title,
  }

  const onSubmit = (data: FormValues) => {
    handlePasswordRecover(data)
  }

  return (
    <Card as={'form'} className={classNames.card} onSubmit={handleSubmit(onSubmit)}>
      <Typography className={classNames.title} variant={'h1'}>
        Forgot your password?
      </Typography>
      <FormInput
        control={control}
        label={'Email'}
        name={'email'}
        placeholder={'example@gmail.com'}
      />
      <Typography className={classNames.instructions} variant={'body2'}>
        Enter your email address and we will send you further instructions
      </Typography>
      <Button fullWidth type={'submit'}>
        Send Instructions
      </Button>
      <Typography className={classNames.caption} variant={'body2'}>
        Did you remember your password?
      </Typography>
      <Typography as={Link} className={classNames.link} to={'#'} variant={'link1'}>
        Try logging in
      </Typography>
    </Card>
  )
}
