import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userSlice from "./redux/userSlice";
import { getUserInforAsync } from "./redux/userSlice";
import menuSlice from "./redux/menuSlice";
const store = configureStore({
  reducer: {
    user: userSlice,
    currentMenu: menuSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export const getUserInfor = getUserInforAsync;
export default store;