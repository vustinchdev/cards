import { Page, Profile } from '@/components'
import { useMeQuery } from '@/services'

import s from './profile-page.module.scss'

export const ProfilePage = () => {
  const classNames = {
    page: s.page,
  }
  const { data: userData } = useMeQuery()

  return (
    <Page className={classNames.page}>
      <Profile avatar={userData?.avatar} email={userData?.email} name={userData?.name} />
    </Page>
  )
}
