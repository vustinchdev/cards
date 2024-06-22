import { Link } from 'react-router-dom'

import { LogOutIcon, PersonOutlineIcon } from '@/assets'
import { Avatar, Typography } from '@/components'

import s from './user-dropdown.module.scss'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../dropdown-menu'

export type UserDropdownProps = {
  avatar: string
  email: string
  name: string
  onSignOut: () => void
}

export const UserDropdown = ({ avatar, email, name, onSignOut }: UserDropdownProps) => {
  const classNames = {
    content: s.content,
    email: s.email,
    label: s.label,
    menuItem: s.menuItem,
    name: s.name,
    profile: s.profile,
    trigger: s.trigger,
    userInfo: s.userInfo,
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={classNames.trigger}>
        <Typography className={classNames.name} variant={'subtitle1'}>
          {name}
        </Typography>
        <Avatar alt={'avatar'} src={avatar} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className={classNames.content}>
        <DropdownMenuLabel className={classNames.label}>
          <Avatar alt={'avatar'} src={avatar} />
          <div className={classNames.userInfo}>
            <Typography variant={'subtitle2'}>{name}</Typography>
            <Typography className={classNames.email} variant={'caption'}>
              {email}
            </Typography>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className={classNames.menuItem}>
          <PersonOutlineIcon />
          <Typography as={Link} className={classNames.profile} to={'/profile'} variant={'caption'}>
            My profile
          </Typography>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className={classNames.menuItem} onSelect={onSignOut}>
          <LogOutIcon />
          <Typography variant={'caption'}>Sign Out</Typography>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
