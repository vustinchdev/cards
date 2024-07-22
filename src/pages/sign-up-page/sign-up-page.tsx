import { useNavigate } from 'react-router-dom'

import { Page, SignUp } from '@/components'
import { SignUpArgs, useSignUpMutation } from '@/services'

import s from './sign-up-page.module.scss'

export const SignUpPage = () => {
  const classNames = {
    page: s.page,
  }
  const [signUp] = useSignUpMutation()
  const navigate = useNavigate()

  const handleSubmit = async ({ email, password }: SignUpArgs) => {
    await signUp({ email, password })
    navigate('/check-email', { state: email })
  }

  return (
    <Page className={classNames.page}>
      <SignUp onSubmit={handleSubmit} />
    </Page>
  )
}
