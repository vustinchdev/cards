import { Dialog, Typography } from '@/components'
import { Deck } from '@/services'

type Props = {
  deck: Deck
  onConfirm: () => void
  title: 'Delete Deck'
}

export const DeleteDeckModal = ({ deck, onConfirm, title }: Props) => {
  const handleDataConfirm = () => {
    onConfirm()
  }

  return (
    <Dialog onConfirm={handleDataConfirm} title={title}>
      <Typography>Do you really want to remove {deck.name}? All cards will be deleted.</Typography>
    </Dialog>
  )
}
