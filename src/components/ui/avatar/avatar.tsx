import { ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import s from './avatar.module.scss'

export type AvatarProps = ComponentPropsWithoutRef<'img'>

export const Avatar = ({ className, ...rest }: AvatarProps) => {
  const classNames = {
    avatar: clsx(s.avatar, className),
  }

  return <img className={classNames.avatar} {...rest} />
}
