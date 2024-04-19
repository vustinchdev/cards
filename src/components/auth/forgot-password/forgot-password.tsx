import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { Button, Card, FormInput, Typography } from '@/components'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

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

  const onSubmit = (data: FormValues) => {
    handlePasswordRecover(data)
  }

  return (
    <Card as={'form'} onSubmit={handleSubmit(onSubmit)}>
      <Typography as={'h1'} variant={'h1'}>
        Forgot your password?
      </Typography>
      <FormInput
        control={control}
        label={'Email'}
        name={'email'}
        placeholder={'example@gmail.com'}
      />
      <Typography variant={'body2'}>
        Enter your email address and we will send you further instructions
      </Typography>
      <Button fullWidth type={'submit'}>
        Send Instructions
      </Button>
      <Typography variant={'body2'}>Did you remember your password?</Typography>
      <Typography as={Link} to={'#'} variant={'subtitle1'}>
        Try logging in
      </Typography>
    </Card>
  )
}
