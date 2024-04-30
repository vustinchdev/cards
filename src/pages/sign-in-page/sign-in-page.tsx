import { useNavigate } from 'react-router-dom'

import { Page, SignIn } from '@/components'
import { LoginArgs, useLoginMutation } from '@/services'

export const SignInPage = () => {
  const [login] = useLoginMutation()
  const navigate = useNavigate()

  const handleSignIn = async (data: LoginArgs) => {
    await login(data)
    navigate('/')
  }

  return (
    <Page>
      <SignIn onSubmit={handleSignIn} />
    </Page>
  )
}
