import { useNavigate } from 'react-router-dom'

import { Page, SignIn } from '@/components'
import { LoginArgs, useLoginMutation } from '@/services'

import s from './sign-in-page.module.scss'

export const SignInPage = () => {
  const classNames = {
    page: s.page,
  }
  const navigate = useNavigate()
  const [login] = useLoginMutation()

  const handleSignIn = async (data: LoginArgs) => {
    await login(data)
    navigate('/')
  }

  return (
    <Page className={classNames.page}>
      <SignIn onSubmit={handleSignIn} />
    </Page>
  )
}
