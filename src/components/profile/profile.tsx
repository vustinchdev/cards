import { Edit2Outline, LogOutIcon, defaultAvatar } from '@/assets'
import { Button, Card, Typography } from '@/components'

type Props = {
  avatar: string
  email: string
  name: string
  onLogout: () => void
}

export const Profile = ({ avatar, email, name, onLogout }: Props) => {
  const handleLogout = () => {
    onLogout()
  }

  return (
    <Card>
      <Typography as={'h1'}>Personal Information</Typography>
      <div>
        <img alt={'avatar'} src={defaultAvatar ?? avatar} />
        <label htmlFor={'avatar'}>
          <Edit2Outline />
        </label>
        <input id={'avatar'} name={'avatar'} type={'file'} />
      </div>
      <div>
        <Typography as={'h2'}>{name}</Typography>
        <Button variant={'icon'}>
          <Edit2Outline />
        </Button>
      </div>
      <Typography>{email}</Typography>
      <Button onClick={handleLogout} variant={'secondary'}>
        <LogOutIcon /> Logout
      </Button>
    </Card>
  )
}
