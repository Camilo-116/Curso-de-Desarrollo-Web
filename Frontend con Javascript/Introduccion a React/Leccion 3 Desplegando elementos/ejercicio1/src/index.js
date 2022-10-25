import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <div></div>
//   </React.StrictMode>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
const title = React.createElement('h1',{key:'div0',align:'center'},'Pizza Napolitana');
const img = React.createElement('img',{key:'div1',width:'300', src:'../assets/pizza.jpg'},null) 
const li1 = React.createElement('li',{key:0},'250gr de harina.')
const li2 = React.createElement('li',{key:1},'1 pizca de sal')
const li3 = React.createElement('li',{key:2},'125 mililitros de agua')
const li4 = React.createElement('li',{key:3},'10gr de levadura')
const list = React.createElement('ul',{key:'div2'},[li1,li2,li3,li4])
const ingredientes = React.createElement('div',{},[<p key='div3'>Necesitas estos ingredientes:</p>,list]);

root.render([title,img,ingredientes])



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
