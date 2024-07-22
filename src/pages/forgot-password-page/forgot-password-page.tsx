import { useNavigate } from 'react-router-dom'

import { ForgotPassword, Page } from '@/components'
import { useRecoverPasswordMutation } from '@/services'

import s from './forgot-password-page.module.scss'

export const ForgotPasswordPage = () => {
  const classNames = {
    page: s.page,
  }
  const [recoverPassword] = useRecoverPasswordMutation()
  const navigate = useNavigate()

  const handlePasswordRecover = async ({ email }: { email: string }) => {
    await recoverPassword({ email })
    navigate('/check-email', { state: email })
  }

  return (
    <Page className={classNames.page}>
      <ForgotPassword onPasswordRecover={handlePasswordRecover} />
    </Page>
  )
}
