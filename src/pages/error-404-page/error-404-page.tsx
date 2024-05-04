import { Link } from 'react-router-dom'

import { error404 } from '@/assets'
import { Button, Page, Typography } from '@/components'

import s from './error-404-page.module.scss'

export const Error404Page = () => {
  const classNames = {
    buttonBack: s.buttonBack,
    image: s.image,
    text: s.text,
  }

  return (
    <Page>
      <div>
        <img alt={'Page not found'} className={classNames.image} src={error404} />
        <Typography className={classNames.text} variant={'body1'}>
          Sorry! Page not found!
        </Typography>
        <Button as={Link} className={classNames.buttonBack} to={'/'}>
          Back to home page
        </Button>
      </div>
    </Page>
  )
}
