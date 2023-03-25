import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../index";
import { login, getUserInfo } from "@/api/user"
import { setlocalUserInfo, getlocalUserInfo } from "@/utils/userInfo";



// 为 slice state 定义一个类型
interface UserState {
  accessToken: string;
  username: string;
  avatar: string;
  permissions: Array<string>[];
  status?: "idle" | "loading" | "failed";
}

// 使用该类型定义初始 state
const initialState: UserState = getlocalUserInfo() || {
  accessToken: "",
  username: "",
  avatar: "",
  permissions: [],
  status: "idle",
};

//用户登录 
export const loginAsync = createAsyncThunk(
  "login",
  async (values: any) => {
    const response = await login(values);
    return response.data;
  }
);

//获取用户信息
export const getUserInforAsync = createAsyncThunk(
  "userSate",
  async (accessToken: string) => {
    const { data } = await getUserInfo(accessToken);
    return data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      Object.assign(state, {
        accessToken: "",
        username: "",
        avatar: "",
        permissions: [],
      });
      setlocalUserInfo("");
      console.log("222222");
      window.location.href = "/";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.fulfilled, (state, action) => {
        const { accessToken } = action.payload;
        state.accessToken = accessToken;
      })
      .addCase(getUserInforAsync.fulfilled, (state, action) => {
        const datas = action.payload;
        if (datas) {
          const { permissions, username } = datas;
          if (permissions && username) {
            Object.assign(state, {
              ...datas
            });
            //更新localstorage中的用户信息
            setlocalUserInfo(state);
          }
        }
      });
  },
});

export const { logout } = userSlice.actions;
export const selectAccessToken = (state: RootState) => state.user.accessToken;
export const selectUserState = (state: RootState) => state.user;
export default userSlice.reducer;