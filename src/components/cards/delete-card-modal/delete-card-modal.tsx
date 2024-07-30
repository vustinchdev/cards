import { useState } from 'react'

import { Dialog, Typography } from '@/components'
import { CardResponse } from '@/services'

type Props = {
  card?: CardResponse
  onConfirm: () => void
}

export const DeleteCardModal = ({ card, onConfirm }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleDataConfirm = () => {
    onConfirm()
    setIsOpen(false)
  }

  return (
    <Dialog
      isOpen={isOpen}
      onConfirm={handleDataConfirm}
      onOpenChange={setIsOpen}
      title={'Delete Card'}
    >
      <Typography>
        Do you really want to remove {card?.question}? All cards will be deleted.
      </Typography>
    </Dialog>
  )
}
