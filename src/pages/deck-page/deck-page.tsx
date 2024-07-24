import { useParams } from 'react-router-dom'

import { CardModal, CardsTable } from '@/components'
import {
  CreateCardArgs,
  useCreateCardMutation,
  useGetDeckByIdQuery,
  useGetPaginatedCardsInDeckQuery,
  useMeQuery,
} from '@/services'

export const DeckPage = () => {
  const { deckId = '' } = useParams()
  const { data: meData } = useMeQuery()
  const [createCard] = useCreateCardMutation()
  const { data: cardsData } = useGetPaginatedCardsInDeckQuery({ id: deckId ?? '' })
  const { data: deckData } = useGetDeckByIdQuery({ id: deckId ?? '' })
  const cards = cardsData?.items
  const isMyDeck = meData?.id === deckData?.userId

  const handleAddNewCard = (body: Omit<CreateCardArgs, 'id'>) => {
    createCard({ id: deckId, ...body })
  }

  return (
    <div>
      <CardModal onSubmit={body => handleAddNewCard(body)} title={'Add New Card'} />
      {cards && <CardsTable cards={cards} isMyDeck={isMyDeck} />}
    </div>
  )
}
