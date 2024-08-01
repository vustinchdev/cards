import {
  CardModal,
  DeleteCardModal,
  Grade,
  SortOrder,
  Table,
  TableBody,
  TableBodyCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from '@/components'
import {
  CardResponse,
  CreateCardArgs,
  useDeleteCardMutation,
  useUpdateCardMutation,
} from '@/services'
import { formatDate } from '@/utils'

type Props = {
  cards: CardResponse[]
  isMyDeck: boolean
  onSortChange: (column: CardsTableColumns, sortOrder: SortOrder) => void
  sortColumn: string
  sortOrder: string
}

type TableContentItem = 'answer' | 'buttons' | 'grade' | 'question' | 'updated'

type TableColumnNameItem = {
  accessor: TableContentItem
  title: string
}

export type CardsTableColumns = 'answer' | 'buttons' | 'grade' | 'question' | 'updated'

export const CardsTable = ({ cards, isMyDeck, onSortChange, sortColumn, sortOrder }: Props) => {
  const [updateCard] = useUpdateCardMutation()
  const [deleteCard] = useDeleteCardMutation()
  const columns: TableColumnNameItem[] = [
    { accessor: 'question', title: 'Question' },
    { accessor: 'answer', title: 'Answer' },
    { accessor: 'updated', title: 'Last Updated' },
    { accessor: 'grade', title: 'Grade' },
  ]

  const handleEditCard = (id: string, body: Omit<CreateCardArgs, 'id'>) => {
    updateCard({ id, ...body })
  }

  const handleDeleteCard = (id: string) => () => {
    deleteCard({ id })
  }

  const handleChangeSort = (field: CardsTableColumns) => () => {
    if (field === 'buttons') {
      return
    }
    let newSortOrder: SortOrder = 'asc'

    if (field === sortColumn) {
      newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc'
    }

    onSortChange(field, newSortOrder)
  }

  if (isMyDeck) {
    columns.push({ accessor: 'buttons', title: '' })
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          {columns.map(column => {
            return (
              <TableHeadCell key={column.accessor} onClick={handleChangeSort(column.accessor)}>
                {column.title}
              </TableHeadCell>
            )
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
              {isMyDeck && (
                <TableBodyCell>
                  <CardModal
                    card={card}
                    onSubmit={body => handleEditCard(card.id, body)}
                    title={'Edit Card'}
                  />
                  <DeleteCardModal card={card} onConfirm={handleDeleteCard(card.id)} />
                </TableBodyCell>
              )}
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
