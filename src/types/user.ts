export interface UserState {
  token: string
  userInfo: UserInfo
}

export interface UserInfo {
  id?: string
  username?: string
  avatar?: string
  role?: string
  [key: string]: any
} 