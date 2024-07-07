import {
  CreateDeckArgs,
  CreateDeckResponse,
  GetDecksArgs,
  GetPaginatedDecks,
  UpdateDeckArgs,
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

export const { useCreateDeckMutation, useGetDecksQuery, useUpdateDeckMutation } = decksService
