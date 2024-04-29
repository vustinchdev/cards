import { Link } from 'react-router-dom'

import { Button, UserDropdown, UserDropdownProps } from '@/components/ui'

type Props =
  | (Partial<UserDropdownProps> & {
      isLoggedIn: false
    })
  | (UserDropdownProps & {
      isLoggedIn: true
    })

export const Header = ({ avatar, email, isLoggedIn, name, onSignOut }: Props) => {
  return (
    <header>
      <div>
        <Link to={'/'}>Logo</Link>
        {isLoggedIn ? (
          <UserDropdown avatar={avatar} email={email} name={name} onSignOut={onSignOut} />
        ) : (
          <Button as={Link} to={'/login'} variant={'secondary'}>
            Sign In
          </Button>
        )}
      </div>
    </header>
  )
}
