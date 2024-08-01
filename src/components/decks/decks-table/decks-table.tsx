import { Link } from 'react-router-dom'

import { ArrowUpIcon, PlayCircleOutlineIcon } from '@/assets'
import {
  Button,
  DeckModal,
  DeleteDeckModal,
  Table,
  TableBody,
  TableBodyCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Typography,
} from '@/components'
import {
  Deck,
  UpdateDeckArgs,
  useDeleteDeckMutation,
  useMeQuery,
  useUpdateDeckMutation,
} from '@/services'
import { formatDate } from '@/utils'
import clsx from 'clsx'

import s from './decks-table.module.scss'

type TableColumnNameItem = {
  accessor: DeckTableColumns
  title: string
}

type Props = {
  decks: Deck[] | undefined
  onSortChange: (column: DeckTableColumns, sortOrder: SortOrder) => void
  sortColumn: string
  sortOrder: string
}

export type SortOrder = 'asc' | 'desc'

export type DeckTableColumns = 'author.name' | 'buttons' | 'cardsCount' | 'name' | 'updated'

const columns: TableColumnNameItem[] = [
  { accessor: 'name', title: 'Name' },
  { accessor: 'cardsCount', title: 'Cards' },
  { accessor: 'updated', title: 'Last Updated' },
  { accessor: 'author.name', title: 'Created by' },
  { accessor: 'buttons', title: '' },
]

export const DecksTable = ({ decks, onSortChange, sortColumn, sortOrder }: Props) => {
  const classNames = {
    buttons: s.buttons,
    columnTitle: s.columnTitle,
    cover: s.cover,
    deck: s.deck,
    deckName: s.deckName,
    descIcon: clsx(sortOrder === 'desc' && s.descIcon),
  }
  const { data: meData } = useMeQuery()
  const [updateDeck] = useUpdateDeckMutation()
  const [deleteDeck] = useDeleteDeckMutation()

  const handleUpdateDeck = (data: UpdateDeckArgs) => {
    updateDeck(data)
  }

  const handleDeleteDeck = (id: string) => () => {
    deleteDeck({ id })
  }

  const handleChangeSort = (field: DeckTableColumns) => () => {
    if (field === 'buttons') {
      return
    }
    let newSortOrder: SortOrder = 'asc'

    if (field === sortColumn) {
      newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc'
    }

    onSortChange(field, newSortOrder)
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          {columns.map(column => {
            return (
              <TableHeadCell key={column.accessor} onClick={handleChangeSort(column.accessor)}>
                <div className={classNames.columnTitle}>
                  {column.title}
                  {sortColumn === column.accessor && (
                    <ArrowUpIcon className={classNames.descIcon} />
                  )}
                </div>
              </TableHeadCell>
            )
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {decks?.map(deck => {
          return (
            <TableRow key={deck.id}>
              <TableBodyCell>
                <div className={classNames.deck}>
                  {deck.cover && (
                    <img alt={'image of deck'} className={classNames.cover} src={deck.cover} />
                  )}
                  <Typography
                    as={Link}
                    className={classNames.deckName}
                    to={`decks/${deck.id}/cards`}
                  >
                    {deck.name}
                  </Typography>
                </div>
              </TableBodyCell>
              <TableBodyCell>{deck.cardsCount}</TableBodyCell>
              <TableBodyCell>{formatDate(deck.updated)}</TableBodyCell>
              <TableBodyCell>{deck.author.name}</TableBodyCell>
              <TableBodyCell>
                <div className={classNames.buttons}>
                  <Button as={Link} to={'#'} variant={'icon'}>
                    <PlayCircleOutlineIcon />
                  </Button>
                  {meData?.id === deck.userId && (
                    <>
                      <DeckModal
                        deck={deck}
                        onSubmit={body => handleUpdateDeck({ id: deck.id, ...body })}
                        title={'Edit Deck'}
                      />
                      <DeleteDeckModal deck={deck} onConfirm={handleDeleteDeck(deck.id)} />
                    </>
                  )}
                </div>
              </TableBodyCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
