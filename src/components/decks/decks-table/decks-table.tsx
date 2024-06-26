import {
  Table,
  TableBody,
  TableBodyCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from '@/components/ui'

type TableColumnNameItem = {
  accessor: string
  title: string
}

export type Deck = {
  author: Author
  cardsCount: number
  cover: string
  created: string
  id: string
  isFavorite: boolean
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}

export type Author = {
  id: string
  name: string
}

type Props = {
  decks: Deck[]
}

const columns: TableColumnNameItem[] = [
  { accessor: 'name', title: 'Name' },
  { accessor: 'cardsCount', title: 'Cards' },
  { accessor: 'updated', title: 'Last Updated' },
  { accessor: 'author.name', title: 'Created by' },
  { accessor: '', title: '' },
]

export const DecksTable = ({ decks }: Props) => {
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
        {decks.map(deck => {
          return (
            <TableRow key={deck.id}>
              <TableBodyCell>{deck.name}</TableBodyCell>
              <TableBodyCell>{deck.cardsCount}</TableBodyCell>
              <TableBodyCell>{deck.updated}</TableBodyCell>
              <TableBodyCell>{deck.author.name}</TableBodyCell>
              <TableBodyCell></TableBodyCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
