import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../index";
// 为 slice state 定义一个类型
interface MenuState {
    title: string;
    path: string;
    icon?: string;
}

// 使用该类型定义初始 state
const initialState: MenuState = {
    title: "",
    path: "",
    icon: ""
};
export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        open: (state, currentMenu) => {
            Object.assign(state, currentMenu);
        },
    }
});
export const selectUserState = (state: RootState) => state.currentMenu;
export default menuSlice.reducer;