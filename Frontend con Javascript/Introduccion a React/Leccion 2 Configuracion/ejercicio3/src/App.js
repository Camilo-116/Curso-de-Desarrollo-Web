import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <form>
      <label for="nombre">Nombre completo</label><br />
      <input type="text" id="nombre" name="nombre" placeholder='Nombre'></input><br />
      <label for="email">Correo electronico</label><br />
      <input type="email" id="email" name="email" placeholder='Correo electronico'></input><br />
      <label for="asunto">Asunto</label><br />
      <input type="text" id="asunto" name="asunto" placeholder='Asunto'></input><br />
      <label for="mensaje">Mensaje</label><br />
      <input type="text" id="mensaje" name="mensaje" placeholder='Mensaje'></input><br />
    </form>
  );
}

export default App;
