import {
  CreateDeckArgs,
  CreateDeckResponse,
  GetDecksArgs,
  GetMinMaxCardsResponse,
  GetPaginatedCards,
  GetPaginatedCardsInDeckParams,
  GetPaginatedDecks,
  UpdateDeckArgs,
  baseApi,
} from '@/services'

export const decksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      GetPaginatedCardsInDeck: builder.query<GetPaginatedCards, GetPaginatedCardsInDeckParams>({
        providesTags: ['Cards'],
        query: ({ id, ...params }) => ({
          params,
          url: `/v1/decks/${id}/cards`,
        }),
      }),
      createDeck: builder.mutation<CreateDeckResponse, CreateDeckArgs>({
        invalidatesTags: ['Decks'],
        query: body => ({
          body,
          method: 'POST',
          url: '/v1/decks',
        }),
      }),
      deleteDeck: builder.mutation<CreateDeckResponse, { id: string }>({
        invalidatesTags: ['Decks'],
        query: ({ id }) => ({
          method: 'DELETE',
          url: `/v1/decks/${id}`,
        }),
      }),
      getDeckById: builder.query<CreateDeckResponse, { id: string }>({
        providesTags: ['Deck'],
        query: ({ id }) => ({
          url: `/v1/decks/${id}`,
        }),
      }),
      getDecks: builder.query<GetPaginatedDecks, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: args => ({
          params: args ?? undefined,
          url: '/v2/decks',
        }),
      }),
      getMinMaxCards: builder.query<GetMinMaxCardsResponse, void>({
        query: () => ({
          url: '/v2/decks/min-max-cards',
        }),
      }),
      updateDeck: builder.mutation<CreateDeckResponse, UpdateDeckArgs>({
        invalidatesTags: ['Decks'],
        query: ({ id, ...args }) => {
          const formData = new FormData()

          if (args.cover) {
            formData.append('cover', args.cover)
          }
          if (args.isPrivate) {
            formData.append('isPrivate', args.isPrivate.toString())
          }
          if (args.name) {
            formData.append('name', args.name)
          }

          return {
            body: formData,
            method: 'PATCH',
            url: `/v1/decks/${id}`,
          }
        },
      }),
    }
  },
})

export const {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDeckByIdQuery,
  useGetDecksQuery,
  useGetMinMaxCardsQuery,
  useGetPaginatedCardsInDeckQuery,
  useUpdateDeckMutation,
} = decksService
