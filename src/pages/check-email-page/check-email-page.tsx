import { useLocation } from 'react-router-dom'

import { CheckEmail, Page } from '@/components'

import s from './check-email-page.module.scss'

export const CheckEmailPage = () => {
  const classNames = {
    page: s.page,
  }
  const location = useLocation()
  const email = location.state

  return (
    <Page className={classNames.page}>
      <CheckEmail email={email} />
    </Page>
  )
}
