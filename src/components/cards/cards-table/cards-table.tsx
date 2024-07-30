import {
  CardModal,
  DeleteCardModal,
  Grade,
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
}

type TableContentItem = 'answer' | 'buttons' | 'grade' | 'question' | 'updated'

type TableColumnNameItem = {
  accessor: TableContentItem
  title: string
}

export const CardsTable = ({ cards, isMyDeck }: Props) => {
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
