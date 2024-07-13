import { useSearchParams } from 'react-router-dom'

import {
  DeckModal,
  DecksTable,
  Input,
  Pagination,
  Tabs,
  TabsList,
  TabsTrigger,
  Typography,
} from '@/components'
import { CreateDeckArgs, useCreateDeckMutation, useGetDecksQuery } from '@/services'

import s from './decks-page.module.scss'

export const DecksPage = () => {
  const [createDeck] = useCreateDeckMutation()
  const classNames = {
    titleContainer: s.titleContainer,
  }
  const [searchParams, setSearchParams] = useSearchParams()
  const searchDeckName = searchParams.get('deckName') ?? ''
  const currentPage = searchParams.get('currentPage') ?? 1
  const itemsPerPage = searchParams.get('itemsPerPage') ?? 10
  const currentTab = searchParams.get('decksToShow') ?? 'allDecks'
  const { data: decksData } = useGetDecksQuery({
    authorId: currentTab === 'myDecks' ? '~caller' : undefined,
    currentPage: +currentPage,
    itemsPerPage: +itemsPerPage,
    name: searchDeckName,
  })

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

  const handleChangeTab = (tabValue: string) => {
    searchParams.set('decksToShow', tabValue)
    searchParams.set('currentPage', '1')
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
        <Tabs onValueChange={handleChangeTab} value={currentTab}>
          <Typography>Show Decks</Typography>
          <TabsList>
            <TabsTrigger value={'myDecks'}>My Decks</TabsTrigger>
            <TabsTrigger value={'allDecks'}>All Decks</TabsTrigger>
          </TabsList>
        </Tabs>
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
