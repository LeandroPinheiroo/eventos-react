import React,{useState} from 'react';
import './login.css';
import logo from '../../assets/images/rick.png';
import {useSelector, useDispatch} from 'react-redux';
import firebase from '../../config/firebase'
import 'firebase/auth'
import { Link, Redirect} from 'react-router-dom';
import {NotificationManager} from 'react-notifications';



function Login(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [msg, setMsg] = useState('');

    const dispatch = useDispatch();
    const [showSpinner, setShowSpinner] = useState(false)

    const Spinner = () => (
        <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    )


    function handleLogin() {
        setShowSpinner(true)

        firebase.auth()
        .signInWithEmailAndPassword(email,senha)
        .then(resultado => {
            NotificationManager.success('Você está logado!', 'Sucesso');
            dispatch({
                type:'LOG_IN',
                payload:{
                    usuarioEmail:email
                }
            })
            
        }).catch(erro => {
            setShowSpinner(false)
            NotificationManager.error('Verifique suas credenciais!', 'Erro')
        });
    }

    return (
    
        <div className="login-content d-flex align-items-center text-center">
            {useSelector(state => state.user.usuarioLogado) == 1 ? <Redirect to="/"></Redirect> : null}
            <form className="form-signin mx-auto">
                <img className="mb-4" src={logo}  width="72" height="72" alt=""></img>
                <h3 className="h3 mb-3 font-weight-bold text-white"> Login</h3>

                <div className="mb-3">
                    <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="E-mail"
                        onChange={e => setEmail(e.target.value)}/>
                    <div id="emailHelp" className="form-text text-white">Não compartilhe seu E-mail com ninguém</div>
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" id="inputPassowrd" placeholder="Senha"
                        onChange={e => setSenha(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <button type="button" className="btn btn-lg btn-login btn-block" onClick={handleLogin}>Entrar</button>
                </div>
                <div className="opcoes-login text-white my-5">
                    { msg === "sucesso" && <p >WoW! <strong>Você está conectado! &#128512;</strong> </p>}
                    { msg === "erro" &&<p>Ops! <strong>Verifique suas credenciais &#128148;</strong></p>}
                </div>
                <div className="opcoes-login text-white my-5">
                    <Link to ="/recupera-usuario" className="mx-2">Recuperar senha</Link>
                    <Link to = "/novo-usuario" className="mx-2">Quero me cadastrar</Link>
                </div>
                { showSpinner ? <Spinner /> : null }
            </form>
            
        </div>
    
    );
}

export default Login;