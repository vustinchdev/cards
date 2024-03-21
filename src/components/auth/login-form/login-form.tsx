import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { FormCheckbox } from '@/components/ui/form-components/form-checkbox'
import { FormInput } from '@/components/ui/form-components/form-input'
import { Typography } from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

type Props = {
  onSubmit: (data: FormValues) => void
}
type FormValues = z.infer<typeof loginSchema>

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
  rememberMe: z.boolean(),
})

export const LoginForm = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: zodResolver(loginSchema),
  })

  return (
    <Card as={'form'} onSubmit={handleSubmit(onSubmit)}>
      <Typography as={'h1'} variant={'h1'}>
        Sign In
      </Typography>
      <FormInput control={control} label={'Email'} name={'email'} placeholder={'email'} />
      <FormInput control={control} label={'Password'} name={'password'} placeholder={'password'} />
      <FormCheckbox control={control} label={'Remember me'} name={'rememberMe'} />
      <Typography as={'a'} href={'#'}>
        Forgot Password?
      </Typography>
      <Button type={'submit'}>Sign In</Button>
      <Typography>Don{"'"}t have an account?</Typography>
      <a href={'#'}>Sign Up</a>
    </Card>
  )
}
