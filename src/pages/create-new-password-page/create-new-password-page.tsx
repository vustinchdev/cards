import { useParams } from 'react-router-dom'

import { CreateNewPassword, Page } from '@/components'
import { useResetPasswordMutation } from '@/services'

import s from './create-new-password.module.scss'

export const CreateNewPasswordPage = () => {
  const classNames = {
    page: s.page,
  }
  const [resetPassword] = useResetPasswordMutation()
  const { token } = useParams()

  const handleSubmit = ({ password }: { password: string }) => {
    if (token) {
      resetPassword({ password, token })
    }
  }

  return (
    <Page className={classNames.page}>
      <CreateNewPassword onSubmit={handleSubmit} />
    </Page>
  )
}
