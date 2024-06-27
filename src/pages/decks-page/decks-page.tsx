import { DecksTable } from '@/components'
import { useGetDecksQuery } from '@/services'

export const DecksPage = () => {
  const { data: decksData } = useGetDecksQuery()

  const decks = decksData?.items

  return (
    <div>
      <DecksTable decks={decks} />
    </div>
  )
}
