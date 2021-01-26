import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'

import Login from './view/login';
import UsuarioNovo from './view/usuario-novo';
import Home from './view/home';
import {NotificationContainer} from 'react-notifications';
import UsuarioRecupera from './view/usuario-recupera';
import EventoCadastro from './view/evento-cadastro';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/novo-usuario" component={UsuarioNovo}/>
      <Route exact path="/recupera-usuario" component={UsuarioRecupera}/>
      <Route exact path="/cadastra-evento" component={EventoCadastro} />  
      <NotificationContainer/>
    </BrowserRouter>
  );
}

export default App;
