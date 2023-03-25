import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './framework/layout/header/header';
import Menu from './framework/layout/left/menu';
import Content from './framework/layout/content/content';
import store, { getUserInfor } from '@/store/index';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
export const renderIndex = () => {
  store.dispatch(getUserInfor(store.getState().user.accessToken)).then(v => {
    root.render(
      <BrowserRouter>
        <React.StrictMode>
          <Provider store={store}>
            <Header />
            <Menu />
            <Content />
          </Provider>
        </React.StrictMode>
      </BrowserRouter>
    );
  })
}
if (store.getState().user.accessToken) {
  renderIndex();
} else {
  const Login = lazy(() => import(`@/pages/login/login`));
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <Provider store={store}>
          <Routes>
            <Route key="login-page" path="/" element={<Login />} />
          </Routes>
        </Provider>
      </React.StrictMode>
    </BrowserRouter>
  );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
