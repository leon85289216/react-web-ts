export const login = (values: any) => {
    return {
        data: {
            accessToken: "1111111111111111"
        }
    };
}
export const getUserInfo = (accessToken: string) => {
    return {
        data: {
            username: "liang1.feng",
            avatar: "",
            permissions: [
                {
                    title:"用户管理",
                    icon:"",
                    path: '/userMgr/userInfo',
                    element: 'userMgr/userInfo/userInfo',
                    items:[]
                },
                {
                    title:"登录",
                    icon:"",
                    path: '/login',
                    element: 'login/login',
                    items:[]
                }
            ],
            status: "idle",
        }
    }
};