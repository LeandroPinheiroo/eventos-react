import { Link } from "react-router-dom";
import './nav-bar.css';
import {useSelector, useDispatch} from 'react-redux';

function NavBar(){

    const dispatch = useDispatch();

    function handleLogout(){
        dispatch({
            type:'LOG_OUT'
        })
    }
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark ">
            <span className="navbar-brand" href="#" >IFMG eventos</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            {
                useSelector(state => state.user.usuarioLogado) === 0 &&
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/novo-usuario">Cadastrar<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Entrar<span className="sr-only">(current)</span></Link>
                        </li>
                </ul>
            }
            {
                useSelector(state => state.user.usuarioLogado) === 1 &&
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Meus Eventos <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Publicar Eventos<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#" onClick = {handleLogout}>Sair<span className="sr-only">(current)</span></Link>
                        </li>
                </ul>
            }
            </div>
        </nav>
    );
}

export default NavBar;