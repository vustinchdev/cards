import { Edit2Outline, LogOutIcon, defaultAvatar } from '@/assets'
import { Avatar, Button, Typography } from '@/components'
import { useLogoutMutation } from '@/services'

import s from './personal-information.module.scss'

type Props = {
  avatar?: string
  email?: string
  name?: string
}

export const PersonalInformation = ({ avatar, email, name }: Props) => {
  const classNames = {
    avatar: s.avatar,
    avatarContainer: s.avatarContainer,
    container: s.container,
    email: s.email,
    inputFile: s.inputFile,
    label: s.label,
    nameContainer: s.nameContainer,
  }

  const [logout] = useLogoutMutation()

  const handleLogout = () => {
    logout()
  }

  return (
    <div className={classNames.container}>
      <div className={classNames.avatarContainer}>
        <Avatar alt={'avatar'} className={classNames.avatar} src={defaultAvatar ?? avatar} />
        <label className={classNames.label} htmlFor={'avatar'}>
          <Edit2Outline />
        </label>
        <input className={classNames.inputFile} id={'avatar'} name={'avatar'} type={'file'} />
      </div>
      <div className={classNames.nameContainer}>
        <Typography variant={'h2'}>{name}</Typography>
        <Button variant={'icon'}>
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
