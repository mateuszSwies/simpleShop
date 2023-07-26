import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import './index.css';

// eslint-disable-next-line spaced-comment, @typescript-eslint/ban-ts-comment
//@ts-ignore
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
