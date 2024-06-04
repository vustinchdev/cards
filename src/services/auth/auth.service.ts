import { baseApi } from '../base-api'
import { LoginArgs, LoginResponse, MeResponse } from './auth.types'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      login: builder.mutation<LoginResponse, LoginArgs>({
        invalidatesTags: ['Auth'],
        async onQueryStarted(_, { queryFulfilled }) {
          const { data } = await queryFulfilled

          if (!data) {
            return
          }

          localStorage.setItem('accessToken', data.accessToken)
          localStorage.setItem('refreshToken', data.refreshToken)
        },
        query: body => ({
          body,
          method: 'POST',
          url: '/v1/auth/login',
        }),
      }),
      logout: builder.mutation<void, void>({
        invalidatesTags: ['Auth'],
        async onQueryStarted(_, { dispatch, queryFulfilled }) {
          await queryFulfilled

          localStorage.removeItem('accessToken')
          localStorage.removeItem('refreshToken')
          dispatch(authService.util.resetApiState())
        },
        query: () => ({
          method: 'POST',
          url: '/v2/auth/logout',
        }),
      }),
      me: builder.query<MeResponse, void>({
        providesTags: ['Auth'],
        query: () => ({
          url: '/v1/auth/me',
        }),
      }),
    }
  },
})

export const { useLoginMutation, useLogoutMutation, useMeQuery } = authService
