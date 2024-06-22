import { Page, Profile } from '@/components'
import { useMeQuery } from '@/services'

export const ProfilePage = () => {
  const { data: userData } = useMeQuery()

  return (
    <Page>
      <Profile avatar={userData?.avatar} email={userData?.email} name={userData?.name} />
    </Page>
  )
}
