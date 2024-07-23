import { useParams } from 'react-router-dom'

import { CardsTable } from '@/components'
import { useGetPaginatedCardsInDeckQuery } from '@/services'

export const DeckPage = () => {
  const { deckId } = useParams()
  const { data: cardsData } = useGetPaginatedCardsInDeckQuery({ id: deckId ?? '' })
  const cards = cardsData?.items

  return <div>{cards && <CardsTable cards={cards} />}</div>
}
