import {
  EditOutlineIcon,
  MoreVerticalOutlineIcon,
  PlayCircleOutlineIcon,
  TrashOutlineIcon,
} from '@/assets'

import s from './my-deck-dropdown.module.scss'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../dropdown-menu'

export const MyDeckDropdown = () => {
  const classNames = {
    trigger: s.trigger,
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={classNames.trigger}>
        <MoreVerticalOutlineIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <PlayCircleOutlineIcon />
          Learn
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <EditOutlineIcon />
          Edit
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <TrashOutlineIcon />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
