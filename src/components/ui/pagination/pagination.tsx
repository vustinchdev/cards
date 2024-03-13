import { ArrowIcon } from '@/assets/icons'
import clsx from 'clsx'

import s from './pagination.module.scss'

import { usePagination } from './usePagination'

export type PaginationProps = {
  currentPage: number
  onChange: (currentPage: number) => void
  pageSize: number
  siblingCount?: number
  totalItemsCount: number
}

export const Pagination = ({
  currentPage,
  onChange,
  pageSize,
  siblingCount,
  totalItemsCount,
}: PaginationProps) => {
  const { handleNextPage, handlePageChange, handlePreviosPage, lastPage, paginationRange } =
    usePagination({
      currentPage,
      onChange,
      pageSize,
      siblingCount,
      totalItemsCount,
    })

  const classNames = {
    arrowButton: clsx(s.arrowButton),
    container: clsx(s.container),
    dots: clsx(s.dots),
    iconRight: clsx(s.iconRight),
    pageButton: (page: number) => clsx(s.pageButton, { [s.selected]: currentPage === page }),
  }

  return (
    <div className={classNames.container}>
      <button
        className={classNames.arrowButton}
        disabled={currentPage === 1}
        onClick={handlePreviosPage}
      >
        <ArrowIcon />
      </button>
      {paginationRange.map((page, index) => {
        if (typeof page !== 'number') {
          return (
            <span className={classNames.dots} key={index}>
              &#8230;
            </span>
          )
        }

        return (
          <button
            className={classNames.pageButton(page)}
            key={index}
            onClick={handlePageChange(page)}
          >
            {page}
          </button>
        )
      })}
      <button
        className={classNames.arrowButton}
        disabled={currentPage === lastPage}
        onClick={handleNextPage}
      >
        <ArrowIcon className={classNames.iconRight} />
      </button>
    </div>
  )
}
