import { useSearchParams } from 'react-router-dom'

import { DeckModal, DecksTable, Pagination } from '@/components'
import { CreateDeckArgs, useCreateDeckMutation, useGetDecksQuery } from '@/services'

export const DecksPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentPage = searchParams.get('currentPage') ?? 1
  const itemsPerPage = searchParams.get('itemsPerPage') ?? 10
  const { data: decksData } = useGetDecksQuery({
    currentPage: +currentPage,
    itemsPerPage: +itemsPerPage,
  })
  const [createDeck] = useCreateDeckMutation()

  const decks = decksData?.items
  const totalItemsCount = decksData?.pagination.totalItems || 0
  const perPageOptions = [5, 10, 15, 20]

  const handleChangeCurrentPage = (pageNumber: number) => {
    searchParams.set('currentPage', String(pageNumber))
    setSearchParams(searchParams)
  }

  const handleChangeItemsPerPage = (itemsPerPage: number) => {
    searchParams.set('currentPage', '1')
    searchParams.set('itemsPerPage', String(itemsPerPage))
  }

  const handleAddNewDeck = (data: CreateDeckArgs) => {
    createDeck(data)
    searchParams.set('currentPage', '1')
    setSearchParams(searchParams)
  }

  return (
    <div>
      <DeckModal onSubmit={handleAddNewDeck} title={'Add New Deck'} />
      <DecksTable decks={decks} />
      <Pagination
        currentPage={+currentPage}
        itemsPerPage={+itemsPerPage}
        onPageChange={handleChangeCurrentPage}
        onPerPageChange={handleChangeItemsPerPage}
        perPageOptions={perPageOptions}
        totalItemsCount={totalItemsCount}
      />
    </div>
  )
}
