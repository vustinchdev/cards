import { useLocation } from 'react-router-dom'

import { CheckEmail, Page } from '@/components'

export const CheckEmailPage = () => {
  const location = useLocation()
  const email = location.state

  return (
    <Page>
      <CheckEmail email={email} />
    </Page>
  )
}
