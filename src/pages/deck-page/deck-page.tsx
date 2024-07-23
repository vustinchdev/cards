import { useParams } from 'react-router-dom'

import { CardsTable } from '@/components'
import { useGetDeckByIdQuery, useGetPaginatedCardsInDeckQuery, useMeQuery } from '@/services'

export const DeckPage = () => {
  const { deckId } = useParams()
  const { data: meData } = useMeQuery()
  const { data: cardsData } = useGetPaginatedCardsInDeckQuery({ id: deckId ?? '' })
  const { data: deckData } = useGetDeckByIdQuery({ id: deckId ?? '' })
  const cards = cardsData?.items
  const isMyDeck = meData?.id === deckData?.userId

  return <div>{cards && <CardsTable cards={cards} isMyDeck={isMyDeck} />}</div>
}
