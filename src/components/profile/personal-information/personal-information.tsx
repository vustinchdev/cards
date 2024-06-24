import { ChangeEvent } from 'react'

import { Edit2Outline, LogOutIcon } from '@/assets'
import { Avatar, Button, Typography } from '@/components'
import { useLogoutMutation, useUpdateUserDataMutation } from '@/services'

import s from './personal-information.module.scss'

type Props = {
  avatar?: string
  email?: string
  name?: string
  onEditName: () => void
}

export const PersonalInformation = ({ avatar, email, name, onEditName }: Props) => {
  const classNames = {
    avatar: s.avatar,
    avatarContainer: s.avatarContainer,
    container: s.container,
    email: s.email,
    inputFile: s.inputFile,
    label: s.label,
    nameContainer: s.nameContainer,
  }

  const [updateAvatar] = useUpdateUserDataMutation()

  const [logout] = useLogoutMutation()

  const updateAvatarHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]

      updateAvatar({ avatar: file })
    }
  }

  const handleSetEditMode = () => {
    onEditName()
  }

  const handleLogout = () => {
    logout()
  }

  return (
    <div className={classNames.container}>
      <div className={classNames.avatarContainer}>
        <Avatar alt={'avatar'} className={classNames.avatar} src={avatar} />
        <label className={classNames.label} htmlFor={'avatar'}>
          <Edit2Outline />
        </label>
        <input
          className={classNames.inputFile}
          id={'avatar'}
          onChange={updateAvatarHandler}
          type={'file'}
        />
      </div>
      <div className={classNames.nameContainer}>
        <Typography variant={'h2'}>{name}</Typography>
        <Button onClick={handleSetEditMode} variant={'icon'}>
          <Edit2Outline />
        </Button>
      </div>
      <Typography className={classNames.email}>{email}</Typography>
      <Button onClick={handleLogout} variant={'secondary'}>
        <LogOutIcon /> Logout
      </Button>
    </div>
  )
}
