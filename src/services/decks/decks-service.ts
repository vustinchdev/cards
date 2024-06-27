import { GetDecksArgs, GetPaginatedDecks, baseApi } from '@/services'

export const decksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getDecks: builder.query<GetPaginatedDecks, GetDecksArgs | void>({
        query: args => ({
          params: args ?? undefined,
          url: '/v2/decks',
        }),
      }),
    }
  },
})

export const { useGetDecksQuery } = decksService
