import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

function App() {
  return (
    <form>
      <h1>Formulario de registro.</h1>
      <i class="fa fa-user icon"></i><input type="text" placeholder="Nombre de usuario"></input><br/>
      <i class="fa fa-envelope icon"></i><input type="email" placeholder="Correo electronico"></input><br/>
      <i class="fa fa-key icon"></i><input type="password" placholder="Contraseña"></input>
    </form>
  );
}

export default App;
