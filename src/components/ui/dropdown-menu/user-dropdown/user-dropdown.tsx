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

type UserDropdownProps = {
  avatar: string
  email: string
  name: string
}

export const UserDropdown = ({ avatar, email, name }: UserDropdownProps) => {
  const classNames = {
    email: s.email,
    label: s.label,
    menuItem: s.menuItem,
    trigger: s.trigger,
    userInfo: s.userInfo,
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={classNames.trigger}>
        <Avatar alt={'avatar'} src={avatar} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
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
          <Typography variant={'caption'}>My profile</Typography>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className={classNames.menuItem}>
          <LogOutIcon />
          <Typography variant={'caption'}>Sign Out</Typography>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
