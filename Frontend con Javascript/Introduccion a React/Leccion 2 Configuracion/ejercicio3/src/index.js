import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
console.log('Llegue aqui');
ReactDOM.createRoot(document.getElementsByTagName('title')[0]).render('Titulo react')
const tituloH1 = React.createElement('h1',{align:"center"},'Header 1')
ReactDOM.createRoot(document.getElementById('cuerpo')).render([tituloH1,<p>lorem ipsum dolor et sit amet</p>])
const enlace = React.createElement('a',{target: "_blank", href: "https://learn.nextu.com"},'Ir a NextU')
ReactDOM.createRoot(document.getElementById('enlace')).render(enlace, document.getElementById('enlace'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
