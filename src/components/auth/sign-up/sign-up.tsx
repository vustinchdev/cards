import { useForm } from 'react-hook-form'

import { Button, Card, FormInput, Typography } from '@/components'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

type Props = {
  onSubmit: (data: FormValues) => void
}

type FormValues = z.infer<typeof signUpSchema>

const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
})

export const SignUp = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(signUpSchema),
  })

  return (
    <Card as={'form'} onSubmit={handleSubmit(onSubmit)}>
      <Typography variant={'h1'}>Sign Up</Typography>
      <FormInput control={control} label={'Email'} name={'email'} placeholder={'email'} />
      <FormInput
        control={control}
        label={'Password'}
        name={'password'}
        placeholder={'password'}
        type={'password'}
      />
      <FormInput
        control={control}
        label={'Confirm Password'}
        name={'password'}
        placeholder={'password'}
        type={'password'}
      />
      <Button fullWidth type={'submit'}>
        Sign Up
      </Button>
      <Typography variant={'body2'}>Already have an account?</Typography>
      <Typography as={'a'} href={'#'} variant={'subtitle1'}>
        Sign In
      </Typography>
    </Card>
  )
}
