export const login = (values: any) => {
    return {
        data: {
            accessToken: "1111111111111111",
            userName:values.userName
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
                }
            ],
            status: "idle",
        }
    }
};