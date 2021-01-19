import React,{useState} from 'react';
import './usuario-novo.css';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import firebase from '../../config/firebase'
import 'firebase/auth'



function Login(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [carregando, setCarregando] = useState(false);


    function handleNewUser() {
        if(!email || !senha || email === '' || senha ===''){
            NotificationManager.error('E-mail e senha são obrigatórios!', 'Erro');  
            return;
        }

        setCarregando(true);
        
        firebase.auth()
        .createUserWithEmailAndPassword(email,senha)
        .then(resultado => {
            NotificationManager.success('Usuário Cadastrado com sucesso!', 'Sucesso');  
            setCarregando(false);
            
        }).catch(erro => {
            setCarregando(false);
            switch(erro.message){
                case 'Password should be at least 6 characters':
                    NotificationManager.error('A senha deve ter pelo menos 6 caracteres!', 'Erro');  
                    break;
                case 'The email address is already in use by another account.':
                    NotificationManager.error('Este email já está sendo utilizado por outro usuário!', 'Erro');  
                     break; 
                case 'The email address is badly formatted.':
                    NotificationManager.error('O formato do seu email é inválido!', 'Erro');  
                    break;
                default:
                    NotificationManager.error('Não foi possível cadastrar. Tente novamente mais tarde!', 'Erro');  
                   break;
            }
        });
    }

    return (
    
        <div className="cadastro-content d-flex align-items-center text-center">
            <form className="form-signin mx-auto">
                <h3 className="h3 mb-3 font-weight-bold text-white"> Cadastro de Usuário</h3>
                <div class="mb-3">
                    <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="E-mail"
                        onChange={e => setEmail(e.target.value)}/>
                    <div id="emailHelp" className="form-text text-white">Não compartilhe seu E-mail com ninguém</div>
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" id="inputPassowrd" placeholder="Senha"
                        onChange={e => setSenha(e.target.value)}/>
                </div>
                <div className="mb-3">
                    {
                        carregando ?
                            <div class="spinner-border text-danger" role="status">
                                <span class="sr-only"></span>
                            </div>
                        :
                            <button type="button" className="btn btn-lg btn-cadastro btn-block" onClick={handleNewUser}>Cadastrar</button>
                    }
                </div>
            </form>
            <NotificationContainer/>
        </div>
    
    );
}

export default Login;