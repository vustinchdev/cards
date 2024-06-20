import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { Button, Card, FormCheckbox, FormInput, Typography } from '@/components'
import { signInSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './sign-in.module.scss'

type Props = {
  onSubmit: (data: FormValues) => void
}
type FormValues = z.infer<typeof signInSchema>

export const SignIn = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: zodResolver(signInSchema),
  })

  const classNames = {
    caption: s.caption,
    card: s.card,
    forgotPasswordLink: s.forgotPasswordLink,
    inputsContainer: s.inputsContainer,
    signUpLink: s.signUpLink,
    title: s.title,
  }

  return (
    <Card as={'form'} className={classNames.card} onSubmit={handleSubmit(onSubmit)}>
      <Typography className={classNames.title} variant={'h1'}>
        Sign In
      </Typography>
      <div className={classNames.inputsContainer}>
        <FormInput
          control={control}
          label={'Email'}
          name={'email'}
          placeholder={'example@gmail.com'}
        />
        <FormInput
          control={control}
          label={'Password'}
          name={'password'}
          placeholder={'YourPassword123'}
          type={'password'}
        />
      </div>

      <FormCheckbox control={control} id={'rememberMe'} label={'Remember me'} name={'rememberMe'} />
      <Typography as={Link} className={classNames.forgotPasswordLink} to={'#'}>
        Forgot Password?
      </Typography>
      <Button fullWidth type={'submit'}>
        Sign In
      </Button>
      <Typography className={classNames.caption} variant={'body2'}>
        Don{"'"}t have an account?
      </Typography>
      <Typography as={Link} className={classNames.signUpLink} to={'/sign-up'} variant={'link1'}>
        Sign Up
      </Typography>
    </Card>
  )
}
