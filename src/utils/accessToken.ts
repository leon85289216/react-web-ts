import store from "../store"

export const setAccessToken = (token) => {
    store.dispatch(token);
}