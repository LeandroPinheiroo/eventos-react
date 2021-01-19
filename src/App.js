import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'

import Login from './view/login';
import UsuarioNovo from './view/usuario-novo';
import Home from './view/home';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/novo-usuario" component={UsuarioNovo}/>
    </BrowserRouter>
  );
}

export default App;
