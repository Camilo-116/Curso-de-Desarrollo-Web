import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.css'


class App extends Component {
  render() {
    const arrayList = (libros) => {
      const arr=[]
      for (let i = 0; i < libros.length; i++) {
        arr.push(
          <li type='none' >
            <span className='fa fa-check pr-2'></span>
            {'Título del libro:  '+ libros[i]}
          </li>)
      }
      return arr;
    };

    return (
      <div>
      <div className="App mt-2">
        <h2>Lista de libros</h2>
      </div>
        <ul className='text-primary'>
          {arrayList(this.props.libros)}
        </ul>
      </div>
    );
  }
}

export default App;
