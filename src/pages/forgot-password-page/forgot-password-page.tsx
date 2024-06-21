import { useNavigate } from 'react-router-dom'

import { ForgotPassword, Page } from '@/components'
import { useRecoverPasswordMutation } from '@/services'

export const ForgotPasswordPage = () => {
  const [recoverPassword] = useRecoverPasswordMutation()
  const navigate = useNavigate()

  const handlePasswordRecover = async ({ email }: { email: string }) => {
    await recoverPassword({ email })
    navigate('/check-email', { state: email })
  }

  return (
    <Page>
      <ForgotPassword onPasswordRecover={handlePasswordRecover} />
    </Page>
  )
}
