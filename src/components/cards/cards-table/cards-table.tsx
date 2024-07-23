import {
  Grade,
  Table,
  TableBody,
  TableBodyCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from '@/components/ui'
import { CardResponse } from '@/services'
import { formatDate } from '@/utils'

type Props = {
  cards: CardResponse[]
  isMyDeck: boolean
}

type TableContentItem = 'answer' | 'buttons' | 'grade' | 'question' | 'updated'

type TableColumnNameItem = {
  accessor: TableContentItem
  title: string
}

export const CardsTable = ({ cards, isMyDeck }: Props) => {
  const columns: TableColumnNameItem[] = [
    { accessor: 'question', title: 'Question' },
    { accessor: 'answer', title: 'Answer' },
    { accessor: 'updated', title: 'Last Updated' },
    { accessor: 'grade', title: 'Grade' },
  ]

  if (isMyDeck) {
    columns.push({ accessor: 'buttons', title: '' })
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
        {cards.map(card => {
          return (
            <TableRow key={card.id}>
              <TableBodyCell>{card.question}</TableBodyCell>
              <TableBodyCell>{card.answer}</TableBodyCell>
              <TableBodyCell>{formatDate(card.updated)}</TableBodyCell>
              <TableBodyCell>
                <Grade maxGrade={5} value={card.grade} />
              </TableBodyCell>
              {isMyDeck && <TableBodyCell></TableBodyCell>}
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
