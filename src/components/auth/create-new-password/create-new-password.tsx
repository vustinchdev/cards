import { useForm } from 'react-hook-form'

import { Button, Card, FormInput, Typography } from '@/components'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

type FormValues = z.infer<typeof passwordSchema>
type Props = {
  onSubmit: (data: FormValues) => void
}

const passwordSchema = z.object({
  password: z.string().min(5),
})

export const CreateNewPassword = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: { password: '' },
    resolver: zodResolver(passwordSchema),
  })

  return (
    <Card as={'form'} onSubmit={handleSubmit(onSubmit)}>
      <Typography variant={'h1'}>Create new password</Typography>
      <FormInput
        control={control}
        label={'password'}
        name={'password'}
        placeholder={'YourPassword123'}
        type={'password'}
      />
      <Typography variant={'body2'}>
        Create new password and we will send you further instructions to email
      </Typography>
      <Button fullWidth type={'submit'}>
        Create New Password
      </Button>
    </Card>
  )
}
