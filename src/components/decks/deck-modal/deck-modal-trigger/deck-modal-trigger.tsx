import { Edit2Outline, TrashOutlineIcon } from '@/assets'
import { Button, ModalTrigger } from '@/components/ui'

import { DeckModalTitle } from '../deck-modal'

type Props = {
  title: DeckModalTitle
}

export const DeckModalTrigger = ({ title }: Props) => {
  return (
    <div>
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
