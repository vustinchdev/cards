import {
  CreateDeckArgs,
  CreateDeckResponse,
  GetDecksArgs,
  GetPaginatedDecks,
  baseApi,
} from '@/services'

export const decksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDeck: builder.mutation<CreateDeckResponse, CreateDeckArgs>({
        invalidatesTags: ['Decks'],
        query: body => ({
          body,
          method: 'POST',
          url: '/v1/decks',
        }),
      }),
      getDecks: builder.query<GetPaginatedDecks, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: args => ({
          params: args ?? undefined,
          url: '/v2/decks',
        }),
      }),
    }
  },
})

export const { useCreateDeckMutation, useGetDecksQuery } = decksService
