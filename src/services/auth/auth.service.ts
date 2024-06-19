import { baseApi } from '../base-api'
import { LoginArgs, LoginResponse, MeResponse, SignUpArgs, SignUpResponse } from './auth.types'

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
      signUp: builder.mutation<SignUpResponse, SignUpArgs>({
        query: params => {
          const origin = window.location.origin

          return {
            body: {
              ...params,
              html: `<b>Hello, ##name##!</b><br/>Please confirm your email by clicking on the link below:<br/><a href="${origin}/confirm-email/##token##">Confirm email</a>. If it doesn't work, copy and paste the following link in your browser:<br/>${origin}/confirm-email/##token##`,
              name: '',
              subject: 'Verify your email address',
            },
            method: 'POST',
            sendConfirmationEmail: true,
            url: '/v1/auth/sign-up',
          }
        },
      }),
    }
  },
})

export const { useLoginMutation, useLogoutMutation, useMeQuery, useSignUpMutation } = authService
