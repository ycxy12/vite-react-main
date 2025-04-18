import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { UserState, UserInfo } from "@/types"

const userState: UserState = {
	token: "",
	userInfo: {} as UserInfo,
}

const userSlice = createSlice({
	name: "user",
	initialState: userState,
	reducers: {
		setToken(state, { payload }: PayloadAction<string>) {
			state.token = payload
		},
		setUserInfo(state, { payload }: PayloadAction<UserInfo>) {
			state.userInfo = payload
		},
	},
})

export const { setToken, setUserInfo } = userSlice.actions
export default userSlice.reducer 