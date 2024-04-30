export type LoginResponse = {
  accessToken: string
  refreshToken: string
}

export type LoginArgs = {
  email: string
  password: string
  rememberMe?: boolean
}
