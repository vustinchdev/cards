import {
  EditOutlineIcon,
  MoreVerticalOutlineIcon,
  PlayCircleOutlineIcon,
  TrashOutlineIcon,
} from '@/assets'

import s from './my-deck-dropdown.module.scss'

import { Typography } from '../../typography'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../dropdown-menu'

export const MyDeckDropdown = () => {
  const classNames = {
    content: s.content,
    menuItem: s.menuItem,
    trigger: s.trigger,
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={classNames.trigger}>
        <MoreVerticalOutlineIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent className={classNames.content}>
        <DropdownMenuItem className={classNames.menuItem}>
          <PlayCircleOutlineIcon />
          <Typography variant={'caption'}>Learn</Typography>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className={classNames.menuItem}>
          <EditOutlineIcon />
          <Typography variant={'caption'}>Edit</Typography>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className={classNames.menuItem}>
          <TrashOutlineIcon />
          <Typography variant={'caption'}>Delete</Typography>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
