import { ComponentPropsWithoutRef } from 'react'

import { defaultAvatar } from '@/assets'
import clsx from 'clsx'

import s from './avatar.module.scss'

export type AvatarProps = {
  avatar?: string
} & ComponentPropsWithoutRef<'img'>

export const Avatar = ({ avatar, className, src, ...rest }: AvatarProps) => {
  const classNames = {
    avatar: clsx(s.avatar, className),
  }

  return <img className={classNames.avatar} src={avatar ?? defaultAvatar} {...rest} />
}
