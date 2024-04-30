import { Link } from 'react-router-dom'

import { Button, UserDropdown, UserDropdownProps } from '@/components'

import s from './header.module.scss'

type Props =
  | (Partial<UserDropdownProps> & {
      isLoggedIn: false
    })
  | (UserDropdownProps & {
      isLoggedIn: true
    })

export const Header = ({ avatar, email, isLoggedIn, name, onSignOut }: Props) => {
  const classNames = {
    container: s.container,
    header: s.header,
  }

  return (
    <header className={classNames.header}>
      <div className={classNames.container}>
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
