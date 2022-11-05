import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';  // App.jsからApp関数を取り込んでいる。
// Appの代わりにHelloをインポートする
import Hello from './components/Hello'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  // index.htmlにあるrootをIDにもつ要素を指定している。
  document.getElementById('root') as HTMLElement
);
ReactDOM.render(
  // 描画するJSXタグを指定している。
  <React.StrictMode>
    {/* Appはsrc/App.tsxからインポートしたものを使用している。 */}
    {/* AppからHelloに置き換える */}
    <Hello />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
