import { ForgotPassword, Page } from '@/components'
import { useRecoverPasswordMutation } from '@/services'

export const ForgotPasswordPage = () => {
  const [recoverPassword] = useRecoverPasswordMutation()

  const handlePasswordRecover = ({ email }: { email: string }) => {
    recoverPassword({ email })
  }

  return (
    <Page>
      <ForgotPassword onPasswordRecover={handlePasswordRecover} />
    </Page>
  )
}
