import {
  DeckModal,
  Table,
  TableBody,
  TableBodyCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from '@/components'
import { Deck, UpdateDeckArgs, useUpdateDeckMutation } from '@/services'
import { formatDate } from '@/utils'

type TableColumnNameItem = {
  accessor: string
  title: string
}

type Props = {
  decks: Deck[] | undefined
}

const columns: TableColumnNameItem[] = [
  { accessor: 'name', title: 'Name' },
  { accessor: 'cardsCount', title: 'Cards' },
  { accessor: 'updated', title: 'Last Updated' },
  { accessor: 'author.name', title: 'Created by' },
  { accessor: '', title: '' },
]

export const DecksTable = ({ decks }: Props) => {
  const [updateDeck] = useUpdateDeckMutation()

  const handleUpdateDeck = (data: UpdateDeckArgs) => {
    updateDeck(data)
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          {columns.map(column => {
            return <TableHeadCell key={column.accessor}>{column.title}</TableHeadCell>
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {decks?.map(deck => {
          return (
            <TableRow key={deck.id}>
              <TableBodyCell>{deck.name}</TableBodyCell>
              <TableBodyCell>{deck.cardsCount}</TableBodyCell>
              <TableBodyCell>{formatDate(deck.updated)}</TableBodyCell>
              <TableBodyCell>{deck.author.name}</TableBodyCell>
              <TableBodyCell>
                <DeckModal
                  deck={deck}
                  onSubmit={body => handleUpdateDeck({ id: deck.id, ...body })}
                  title={'Edit Deck'}
                />
              </TableBodyCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
