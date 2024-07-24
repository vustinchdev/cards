import {
  CreateCardArgs,
  CreateCardResponse,
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
      createCard: builder.mutation<CreateCardResponse, CreateCardArgs>({
        invalidatesTags: ['Cards', 'Deck'],
        query: ({ id, ...body }) => {
          const formData = new FormData()

          formData.append('question', body.question)
          formData.append('answer', body.answer)
          if (body.questionImg) {
            formData.append('questionImg', body.questionImg)
          }
          if (body.answerImg) {
            formData.append('answerImg', body.answerImg)
          }
          if (body.questionVideo) {
            formData.append('questionVideo', body.questionVideo)
          }
          if (body.answerVideo) {
            formData.append('answerVideo', body.answerVideo)
          }
          debugger

          return { body: formData, method: 'POST', url: `/v1/decks/${id}/cards` }
        },
      }),
      createDeck: builder.mutation<CreateDeckResponse, CreateDeckArgs>({
        invalidatesTags: ['Decks'],
        query: args => {
          const formData = new FormData()

          formData.append('name', args.name)
          if (args.isPrivate) {
            formData.append('isPrivate', args.isPrivate.toString())
          }
          if (args.cover) {
            formData.append('cover', args.cover)
          }

          return {
            body: formData,
            method: 'POST',
            url: `v1/decks`,
          }
        },
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
  useCreateCardMutation,
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDeckByIdQuery,
  useGetDecksQuery,
  useGetMinMaxCardsQuery,
  useGetPaginatedCardsInDeckQuery,
  useUpdateDeckMutation,
} = decksService
