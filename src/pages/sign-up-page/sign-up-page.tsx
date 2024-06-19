import { Page, SignUp } from '@/components'
import { SignUpArgs, useSignUpMutation } from '@/services'

export const SignUpPage = () => {
  const [signUp] = useSignUpMutation()
  const handleSubmit = ({ email, password }: SignUpArgs) => {
    signUp({ email, password })
  }

  return (
    <Page>
      <SignUp onSubmit={handleSubmit} />
    </Page>
  )
}
