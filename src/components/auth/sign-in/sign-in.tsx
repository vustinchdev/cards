import { useForm } from 'react-hook-form'

import { Button, Card, FormCheckbox, FormInput, Typography } from '@/components'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './sign-in.module.scss'

type Props = {
  onSubmit: (data: FormValues) => void
}
type FormValues = z.infer<typeof loginSchema>

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
  rememberMe: z.boolean(),
})

export const SignIn = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: zodResolver(loginSchema),
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
        <FormInput control={control} label={'Email'} name={'email'} placeholder={'email'} />
        <FormInput
          control={control}
          label={'Password'}
          name={'password'}
          placeholder={'password'}
          type={'password'}
        />
      </div>

      <FormCheckbox control={control} id={'rememberMe'} label={'Remember me'} name={'rememberMe'} />
      <Typography as={'a'} className={classNames.forgotPasswordLink} href={'#'}>
        Forgot Password?
      </Typography>
      <Button fullWidth type={'submit'}>
        Sign In
      </Button>
      <Typography className={classNames.caption}>Don{"'"}t have an account?</Typography>
      <a className={classNames.signUpLink} href={'#'}>
        Sign Up
      </a>
    </Card>
  )
}
