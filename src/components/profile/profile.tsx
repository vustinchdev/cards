import { Card, PersonalInformation, Typography } from '@/components'

import s from './profile.module.scss'

type Props = {
  avatar: string
  email: string
  name: string
}

export const Profile = ({ ...props }: Props) => {
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

  return (
    <Card className={classNames.card}>
      <Typography className={classNames.title} variant={'h1'}>
        Personal Information
      </Typography>
      <PersonalInformation {...props} />
    </Card>
  )
}
