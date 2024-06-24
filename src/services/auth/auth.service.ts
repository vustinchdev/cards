import { baseApi } from '../base-api'
import {
  LoginArgs,
  LoginResponse,
  MeResponse,
  ResetPasswordArgs,
  SignUpArgs,
  SignUpResponse,
  UpdateUserDataArgs,
} from './auth.types'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      login: builder.mutation<LoginResponse, LoginArgs>({
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
      recoverPassword: builder.mutation<void, { email: string }>({
        query: ({ email }) => {
          const origin = window.location.origin

          return {
            body: {
              email,
              html: `<h1>Hi, ##name##</h1><p>Click <a href='${origin}/create-new-password/##token##'>here</a> to recover your password</p>`,
              subject: 'Recover password',
            },
            method: 'POST',
            url: '/v1/auth/recover-password',
          }
        },
      }),
      resetPassword: builder.mutation<void, ResetPasswordArgs>({
        query: ({ password, token }) => ({
          body: password,
          method: 'POST',
          url: `/v1/auth/reset-password/${token}`,
        }),
      }),
      signUp: builder.mutation<SignUpResponse, SignUpArgs>({
        query: params => {
          const origin = window.location.origin
          const name = params.email.slice(0, params.email.indexOf('@'))

          return {
            body: {
              ...params,
              html: `<b>Hello, ##name##!</b><br/>Please confirm your email by clicking on the link below:<br/><a href="${origin}/confirm-email/##token##">Confirm email</a>. If it doesn't work, copy and paste the following link in your browser:<br/>${origin}/confirm-email/##token##`,
              name,
              sendConfirmationEmail: true,
              subject: 'Verify your email address',
            },
            method: 'POST',
            url: '/v1/auth/sign-up',
          }
        },
      }),
      updateUserData: builder.mutation<MeResponse, UpdateUserDataArgs>({
        invalidatesTags: ['Auth'],

        query: ({ avatar, name }) => {
          const formData = new FormData()

          if (avatar) {
            formData.append('avatar', avatar)
          }
          if (name) {
            formData.append('name', name)
          }

          return {
            body: formData,
            method: 'PATCH',
            url: '/v1/auth/me',
          }
        },
      }),
    }
  },
})

export const {
  useLoginMutation,
  useLogoutMutation,
  useMeQuery,
  useRecoverPasswordMutation,
  useResetPasswordMutation,
  useSignUpMutation,
  useUpdateUserDataMutation,
} = authService
