import { Edit2Outline, TrashOutlineIcon } from '@/assets'
import { Button, ModalTitle, ModalTrigger } from '@/components'

import s from './dialog-trigger.module.scss'

type Props = {
  title: ModalTitle
}

export const DeckModalTrigger = ({ title }: Props) => {
  const classNames = {
    container: s.container,
  }

  return (
    <div className={classNames.container}>
      {title === 'Add New Deck' && (
        <ModalTrigger asChild>
          <Button>Add New Deck</Button>
        </ModalTrigger>
      )}
      {title === 'Delete Deck' && (
        <ModalTrigger asChild>
          <Button variant={'icon'}>
            <TrashOutlineIcon />
          </Button>
        </ModalTrigger>
      )}
      {title === 'Edit Deck' && (
        <ModalTrigger asChild>
          <Button variant={'icon'}>
            <Edit2Outline />
          </Button>
        </ModalTrigger>
      )}
      {title === 'Add New Card' && (
        <ModalTrigger asChild>
          <Button>Add New Card</Button>
        </ModalTrigger>
      )}
    </div>
  )
}
