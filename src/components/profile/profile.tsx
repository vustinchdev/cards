import { Edit2Outline, LogOutIcon, defaultAvatar } from '@/assets'
import { Avatar, Button, Card, Typography } from '@/components'

import s from './profile.module.scss'

type Props = {
  avatar: string
  email: string
  name: string
  onLogout: () => void
}

export const Profile = ({ avatar, email, name, onLogout }: Props) => {
  const classNames = {
    avatar: s.avatar,
    avatarContainer: s.avatarContainer,
    card: s.card,
    email: s.email,
    inputFile: s.inputFile,
    label: s.label,
    nameContainer: s.nameContainer,
    title: s.title,
  }
  const handleLogout = () => {
    onLogout()
  }

  return (
    <Card className={classNames.card}>
      <Typography className={classNames.title} variant={'h1'}>
        Personal Information
      </Typography>
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
    </Card>
  )
}
