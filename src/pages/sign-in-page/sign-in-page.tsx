import { Page, SignIn } from '@/components'
import { LoginArgs, useLoginMutation } from '@/services'

import s from './sign-in-page.module.scss'

export const SignInPage = () => {
  const classNames = {
    page: s.page,
  }
  const [login] = useLoginMutation()

  const handleSignIn = (data: LoginArgs) => {
    login(data)
  }

  return (
    <Page className={classNames.page}>
      <SignIn onSubmit={handleSignIn} />
    </Page>
  )
}
