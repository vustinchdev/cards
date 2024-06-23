import { useState } from 'react'

import { Card, EditName, PersonalInformation, Typography } from '@/components'

import s from './profile.module.scss'

type Props = {
  avatar?: string
  email?: string
  name?: string
}

export const Profile = (props: Props) => {
  const classNames = {
    card: s.card,
    title: s.title,
  }

  const [editMode, setEditMode] = useState(false)

  const handleSetEditMode = () => {
    setEditMode(!editMode)
  }

  return (
    <Card className={classNames.card}>
      <Typography className={classNames.title} variant={'h1'}>
        Personal Information
      </Typography>
      {editMode ? (
        <EditName avatar={props.avatar} name={props.name} onEditName={handleSetEditMode} />
      ) : (
        <PersonalInformation {...props} onEditName={handleSetEditMode} />
      )}
    </Card>
  )
}
