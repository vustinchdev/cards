import { Link } from 'react-router-dom'

import { CheckEmailIcon } from '@/assets'
import { Button, Card, Typography } from '@/components'

import s from './check-email.module.scss'

type Props = {
  email: string
}

export const CheckEmail = ({ email }: Props) => {
  const classNames = {
    card: s.card,
    iconContainer: s.iconContainer,
    instructions: s.instructions,
    title: s.title,
  }

  return (
    <Card as={'div'} className={classNames.card}>
      <Typography className={classNames.title} variant={'h1'}>
        Check Email
      </Typography>
      <div className={classNames.iconContainer}>
        <CheckEmailIcon />
      </div>
      <Typography className={classNames.instructions} variant={'body2'}>
        We’ve sent an Email with instructions to {email}
      </Typography>
      <Button as={Link} to={'/login'}>
        Back to Sign In
      </Button>
    </Card>
  )
}
