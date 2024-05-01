import { Page, SignIn } from '@/components'
import { LoginArgs, useLoginMutation } from '@/services'

export const SignInPage = () => {
  const [login] = useLoginMutation()

  const handleSignIn = (data: LoginArgs) => {
    login(data)
  }

  return (
    <Page>
      <SignIn onSubmit={handleSignIn} />
    </Page>
  )
}
