import { ArrowIcon } from '@/assets'
import { Select, SelectItem } from '@/components'
import clsx from 'clsx'

import s from './pagination.module.scss'

import { usePagination } from './usePagination'

export type PaginationProps = {
  currentPage: number
  itemsPerPage: number
  onPageChange: (currentPage: number) => void
  onPerPageChange?: (itemsPerPage: number) => void
  perPageOptions?: number[]
  siblingCount?: number
  totalItemsCount: number
}

const classNames = {
  arrowButton: s.arrowButton,
  container: s.container,
  dots: s.dots,
  iconRight: s.iconRight,
  pageButton: (page: number, currentPage: number) =>
    clsx(s.pageButton, { [s.selected]: currentPage === page }),
  root: s.root,
  select: s.select,
  selectWrapper: s.selectWrapper,
}

export const Pagination = ({
  currentPage,
  itemsPerPage,
  onPageChange,
  onPerPageChange,
  perPageOptions,
  siblingCount,
  totalItemsCount,
}: PaginationProps) => {
  const { handleNextPage, handlePageChange, handlePreviosPage, lastPage, paginationRange } =
    usePagination({
      currentPage,
      itemsPerPage,
      onPageChange,
      siblingCount,
      totalItemsCount,
    })

  const showPerPageSelect = !!itemsPerPage && !!perPageOptions && !!onPerPageChange

  return (
    <div className={classNames.container}>
      <div className={classNames.root}>
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
              className={classNames.pageButton(page, currentPage)}
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

      {showPerPageSelect && (
        <PerPageSelect
          {...{
            itemsPerPage,
            onPerPageChange,
            perPageOptions,
          }}
        />
      )}
    </div>
  )
}

export type PerPageSelectProps = {
  itemsPerPage: number
  onPerPageChange: (itemsPerPage: number) => void
  perPageOptions: number[]
}

export const PerPageSelect = ({
  itemsPerPage,
  onPerPageChange,
  perPageOptions,
}: PerPageSelectProps) => {
  return (
    <div className={classNames.selectWrapper}>
      Show
      <Select
        className={classNames.select}
        onValueChange={page => onPerPageChange(Number(page))}
        pagination
        value={String(itemsPerPage)}
      >
        {perPageOptions.map(option => {
          return (
            <SelectItem key={option} value={String(option)}>
              {option}
            </SelectItem>
          )
        })}
      </Select>
      on page
    </div>
  )
}
