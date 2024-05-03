import { Link } from 'react-router-dom'

import { error404 } from '@/assets'
import { Button, Page, Typography } from '@/components'

export const Error404Page = () => {
  return (
    <Page>
      <img alt={'Page not found'} src={error404} />
      <Typography variant={'body1'}>Sorry! Page not found!</Typography>
      <Button as={Link} to={'/'}>
        Back to home page
      </Button>
    </Page>
  )
}
