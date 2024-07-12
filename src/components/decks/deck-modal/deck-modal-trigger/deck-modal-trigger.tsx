import { Edit2Outline, TrashOutlineIcon } from '@/assets'
import { Button, DeckModalTitle, ModalTrigger } from '@/components'

import s from './deck-modal-trigger.module.scss'

type Props = {
  title: DeckModalTitle
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
    </div>
  )
}
