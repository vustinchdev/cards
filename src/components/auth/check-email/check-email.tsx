import { Link } from 'react-router-dom'

import { CheckEmailIcon } from '@/assets'
import { Button, Card, Typography } from '@/components'

type Props = {
  email: string
}

export const CheckEmail = ({ email }: Props) => {
  return (
    <Card as={'div'}>
      <Typography variant={'h1'}>Check Email</Typography>
      <div>
        <CheckEmailIcon />
      </div>
      <Typography variant={'body2'}>We’ve sent an Email with instructions to {email}</Typography>
      <Button as={Link} to={'#'}>
        Back to Sign In
      </Button>
    </Card>
  )
}
