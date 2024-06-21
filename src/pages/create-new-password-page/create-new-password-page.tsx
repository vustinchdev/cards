import { useParams } from 'react-router-dom'

import { CreateNewPassword, Page } from '@/components'
import { useResetPasswordMutation } from '@/services'

export const CreateNewPasswordPage = () => {
  const [resetPassword] = useResetPasswordMutation()
  const { token } = useParams()

  const handleSubmit = ({ password }: { password: string }) => {
    if (token) {
      resetPassword({ password, token })
    }
  }

  return (
    <Page>
      <CreateNewPassword onSubmit={handleSubmit} />
    </Page>
  )
}
