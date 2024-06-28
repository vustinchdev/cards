import { useSearchParams } from 'react-router-dom'

import { DecksTable, Pagination } from '@/components'
import { useGetDecksQuery } from '@/services'

export const DecksPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentPage = searchParams.get('currentPage') ?? 1
  const itemsPerPage = searchParams.get('itemsPerPage') ?? 10
  const { data: decksData } = useGetDecksQuery({
    currentPage: +currentPage,
    itemsPerPage: +itemsPerPage,
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

  return (
    <div>
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
