import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import {
  DeckModal,
  DecksTable,
  Input,
  Pagination,
  Slider,
  Tabs,
  TabsList,
  TabsTrigger,
  Typography,
} from '@/components'
import { useDebounce } from '@/hooks'
import {
  CreateDeckArgs,
  useCreateDeckMutation,
  useGetDecksQuery,
  useGetMinMaxCardsQuery,
} from '@/services'

import s from './decks-page.module.scss'

export const DecksPage = () => {
  const classNames = {
    titleContainer: s.titleContainer,
  }
  const [createDeck] = useCreateDeckMutation()
  const { data: minMaxCardsCountData } = useGetMinMaxCardsQuery()

  const [searchParams, setSearchParams] = useSearchParams()
  const searchDeckName = searchParams.get('deckName') ?? ''
  const currentPage = searchParams.get('currentPage') ?? 1
  const itemsPerPage = searchParams.get('itemsPerPage') ?? 10
  const currentTab = searchParams.get('decksToShow') ?? 'allDecks'
  const minCardsCount = Number(searchParams.get('minCardsCount'))
  const maxCardsCount = Number(searchParams.get('maxCardsCount'))
  const debounceSearchDeckName = useDebounce(searchDeckName)
  const { data: decksData } = useGetDecksQuery({
    authorId: currentTab === 'myDecks' ? '~caller' : undefined,
    currentPage: +currentPage,
    itemsPerPage: +itemsPerPage,
    maxCardsCount,
    minCardsCount,
    name: debounceSearchDeckName,
  })

  const [cardsCount, setCardsCouunt] = useState([0, 100])

  useEffect(() => {
    if (minMaxCardsCountData) {
      setCardsCouunt([minMaxCardsCountData?.min, minMaxCardsCountData?.max])
    }
  }, [minMaxCardsCountData])

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

  const handleCommitCardsCount = (cardsCount: number[]) => {
    searchParams.set('minCardsCount', String(cardsCount[0]))
    searchParams.set('maxCardsCount', String(cardsCount[1]))
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
        <Slider
          max={minMaxCardsCountData?.max}
          min={minMaxCardsCountData?.min}
          onValueChange={setCardsCouunt}
          onValueCommit={handleCommitCardsCount}
          value={cardsCount}
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
