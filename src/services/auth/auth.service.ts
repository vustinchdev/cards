import { baseApi } from '../base-api'
import { LoginArgs, LoginResponse } from './auth.types'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      login: builder.mutation<LoginResponse, LoginArgs>({
        query: body => ({
          body,
          method: 'POST',
          url: '/v1/auth/login',
        }),
      }),
    }
  },
})

export const { useLoginMutation } = authService
