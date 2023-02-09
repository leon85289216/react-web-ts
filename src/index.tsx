import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './framework/layout/header/header';
import Menu from './framework/layout/left/menu';
import Content from './framework/layout/content/content';
import store, { getUserInfor } from '@/store/index';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
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
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
