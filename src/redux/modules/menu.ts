import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getFlatMenuList } from "@/utils"
import { MenuState, MenuItem } from "@/types"

const menuState: MenuState = {
	isCollapse: false,
	menuList: [],
	flatMenuList: [],
}

const menuSlice = createSlice({
	name: "menu",
	initialState: menuState,
	reducers: {
		updateCollapse(state, { payload }: PayloadAction<boolean>) {
			state.isCollapse = payload
		},
		setMenuList(state, { payload }: PayloadAction<MenuItem[]>) {
			state.menuList = payload
			state.flatMenuList = getFlatMenuList(payload)
		},
	},
})

export default menuSlice.reducer
export const { updateCollapse, setMenuList } = menuSlice.actions 