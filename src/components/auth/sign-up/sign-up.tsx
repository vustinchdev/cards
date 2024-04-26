import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { Button, Card, FormInput, Typography } from '@/components'
import { signUpSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './sign-up.module.scss'

type Props = {
  onSubmit: (data: FormValues) => void
}

type FormValues = z.infer<typeof signUpSchema>

export const SignUp = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      confirmPassword: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(signUpSchema),
  })

  const classNames = {
    caption: s.caption,
    card: s.card,
    inputsContainer: s.inputsContainer,
    signInLink: s.signInLink,
    title: s.title,
  }

  return (
    <Card as={'form'} className={classNames.card} onSubmit={handleSubmit(onSubmit)}>
      <Typography className={classNames.title} variant={'h1'}>
        Sign Up
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
        <FormInput
          control={control}
          label={'Confirm Password'}
          name={'confirmPassword'}
          placeholder={'YourPassword123'}
          type={'password'}
        />
      </div>
      <Button fullWidth type={'submit'}>
        Sign Up
      </Button>
      <Typography className={classNames.caption} variant={'body2'}>
        Already have an account?
      </Typography>
      <Typography as={Link} className={classNames.signInLink} to={'#'} variant={'link1'}>
        Sign In
      </Typography>
    </Card>
  )
}
