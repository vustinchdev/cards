import { useParams, useSearchParams } from 'react-router-dom'

import { CardModal, CardsTable, CardsTableColumns, SortOrder } from '@/components'
import {
  CreateCardArgs,
  useCreateCardMutation,
  useGetDeckByIdQuery,
  useGetPaginatedCardsInDeckQuery,
  useMeQuery,
} from '@/services'

export const DeckPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const { deckId = '' } = useParams()
  const [keySort, direction] = (searchParams.get('sortBy') ?? 'null-null').split('-')
  const orderBy = keySort !== 'null' && `${keySort}-${direction}`

  const { data: meData } = useMeQuery()
  const [createCard] = useCreateCardMutation()
  const { data: cardsData } = useGetPaginatedCardsInDeckQuery({
    id: deckId ?? '',
    orderBy: orderBy ? orderBy : undefined,
  })
  const { data: deckData } = useGetDeckByIdQuery({ id: deckId ?? '' })
  const cards = cardsData?.items
  const isMyDeck = meData?.id === deckData?.userId

  const handleAddNewCard = (body: Omit<CreateCardArgs, 'id'>) => {
    createCard({ id: deckId, ...body })
  }

  const handleChangeSort = (key: CardsTableColumns, direction: SortOrder) => {
    searchParams.set('sortBy', `${key}-${direction}`)
    searchParams.set('currentPage', '1')
    setSearchParams(searchParams)
  }

  return (
    <div>
      <CardModal onSubmit={body => handleAddNewCard(body)} title={'Add New Card'} />
      {cards && (
        <CardsTable
          cards={cards}
          isMyDeck={isMyDeck}
          onSortChange={handleChangeSort}
          sortColumn={keySort}
          sortOrder={direction}
        />
      )}
    </div>
  )
}
