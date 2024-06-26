export type LoginResponse = {
  accessToken: string
  refreshToken: string
}

export type LoginArgs = {
  email: string
  password: string
  rememberMe?: boolean
}

export type MeResponse = {
  avatar: string
  created: string
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  updated: string
}

export type SignUpArgs = {
  email: string
  password: string
}

export type SignUpResponse = {
  avatar: string
  created: string
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  updated: string
}

export type ResetPasswordArgs = {
  password: string
  token: string
}

export type UpdateUserDataArgs = {
  avatar?: File | null
  name?: string
}
