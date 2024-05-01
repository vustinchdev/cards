import { baseApi } from '../base-api'
import { LoginArgs, LoginResponse, MeResponse } from './auth.types'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      login: builder.mutation<LoginResponse, LoginArgs>({
        invalidatesTags: ['Auth'],
        query: body => ({
          body,
          method: 'POST',
          url: '/v1/auth/login',
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

export const { useLoginMutation, useMeQuery } = authService
