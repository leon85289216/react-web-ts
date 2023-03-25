const token_key = window.location.href + "_UserInfo";
export const setlocalUserInfo = (userInfo: any) => {
    const str = JSON.stringify(userInfo);
    window.localStorage.setItem(token_key, str);
}

export const getlocalUserInfo = () => {
    const userStr = window.localStorage.getItem(token_key);
    if (userStr) {
        return JSON.parse(userStr);
    } else {
        return "";
    }
}