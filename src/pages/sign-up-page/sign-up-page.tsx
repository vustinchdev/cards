import { useNavigate } from 'react-router-dom'

import { Page, SignUp } from '@/components'
import { SignUpArgs, useSignUpMutation } from '@/services'

export const SignUpPage = () => {
  const [signUp] = useSignUpMutation()
  const navigate = useNavigate()

  const handleSubmit = async ({ email, password }: SignUpArgs) => {
    await signUp({ email, password })
    navigate('/check-email', { state: email })
  }

  return (
    <Page>
      <SignUp onSubmit={handleSubmit} />
    </Page>
  )
}
