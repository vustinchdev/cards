import { useSearchParams } from 'react-router-dom'

import { DeckModal, DecksTable, Input, Pagination, Typography } from '@/components'
import { CreateDeckArgs, useCreateDeckMutation, useGetDecksQuery } from '@/services'

import s from './decks-page.module.scss'

export const DecksPage = () => {
  const classNames = {
    titleContainer: s.titleContainer,
  }
  const [searchParams, setSearchParams] = useSearchParams()
  const searchDeckName = searchParams.get('deckName') ?? ''
  const currentPage = searchParams.get('currentPage') ?? 1
  const itemsPerPage = searchParams.get('itemsPerPage') ?? 10
  const { data: decksData } = useGetDecksQuery({
    currentPage: +currentPage,
    itemsPerPage: +itemsPerPage,
    name: searchDeckName,
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

  const handleChangeSearchDeckName = (deckName: string) => {
    searchParams.set('deckName', deckName)
    if (!deckName) {
      searchParams.delete('deckName')
    }
    setSearchParams(searchParams)
  }

  const handleClear = () => {
    searchParams.delete('deckName')
    setSearchParams(searchParams)
  }

  return (
    <div>
      <div className={classNames.titleContainer}>
        <Typography variant={'h1'}>Decks list</Typography>
        <DeckModal onSubmit={handleAddNewDeck} title={'Add New Deck'} />
      </div>
      <div>
        <Input
          onClear={handleClear}
          onValueChange={handleChangeSearchDeckName}
          placeholder={'Deck Name'}
          search
          value={searchDeckName}
        />
      </div>
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
