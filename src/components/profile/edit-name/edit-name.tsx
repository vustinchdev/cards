import { useForm } from 'react-hook-form'

import { Avatar, Button, FormInput } from '@/components/ui'
import { nameSchema } from '@/schemas'
import { useUpdateUserDataMutation } from '@/services'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './edit-name.module.scss'

type Props = {
  avatar?: string
  name?: string
  onEditName: () => void
}

type FormValues = z.infer<typeof nameSchema>

export const EditName = ({ avatar, name, onEditName }: Props) => {
  const classNames = {
    avatar: s.avatar,
    container: s.container,
    formInput: s.formInput,
  }
  const { control, handleSubmit } = useForm<{ name: string }>({
    defaultValues: {
      name,
    },
    resolver: zodResolver(nameSchema),
  })

  const [updateUserData] = useUpdateUserDataMutation()

  const handleChangeName = (data: FormValues) => {
    updateUserData(data)
    onEditName()
  }

  return (
    <form className={classNames.container} onSubmit={handleSubmit(handleChangeName)}>
      <Avatar className={classNames.avatar} src={avatar} />
      <FormInput
        className={classNames.formInput}
        control={control}
        label={'Nickname'}
        name={'name'}
      />
      <Button fullWidth type={'submit'}>
        Save Changes
      </Button>
    </form>
  )
}
