import { useForm } from 'react-hook-form'

import { Avatar, Button, FormInput } from '@/components/ui'
import { nameSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'

type Props = {
  avatar: string
  name: string
}

export const EditName = ({ avatar, name }: Props) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name,
    },
    resolver: zodResolver(nameSchema),
  })

  return (
    <form onSubmit={handleSubmit(() => {})}>
      <Avatar src={avatar} />
      <FormInput control={control} name={'name'} />
      <Button fullWidth type={'submit'}>
        Save Changes
      </Button>
    </form>
  )
}
