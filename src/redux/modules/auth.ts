import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RouteObject } from "@/types"

interface AuthState {
    authRouter: RouteObject[]
}

const authState: AuthState = {
    authRouter: [], //权限路由
}

const authSlice = createSlice({
    name: "auth",
    initialState: authState,
    reducers: {
        setAuthRouter(state, { payload }: PayloadAction<RouteObject[]>) {
            state.authRouter = payload
        },
    },
})

export const { setAuthRouter } = authSlice.actions
export default authSlice.reducer 