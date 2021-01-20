import React,{useState} from 'react';
import { NotificationManager} from 'react-notifications';

import 'firebase/auth'
import { Link } from 'react-router-dom';
import NavBar from '../../components/nav-bar';
import './usuario-recupera.css'
import firebase from '../../config/firebase'
import 'firebase/auth';


function UsuarioRecupera(){

    const [email, setEmail] = useState('');

    function handleRecupera(){
        firebase.auth()
        .sendPasswordResetEmail(email)
        .then(resultado => {
            NotificationManager.success('Link Enviado para o E-mail!', 'Sucesso');
            
        }).catch(erro => {
            NotificationManager.error('E-mail não cadastrado!', 'Erro')
        });

    }


    return (
        <>
            <NavBar></NavBar>
            <form className="text-center form-signin mx-auto mt-5">
                <div className="row justify-content-md-center">
                    <div className="col-md-5">
                        <h3 className="mb-3 font-weight-bold">Recuperar Senha</h3>
                        <input type="email" 
                            className="form-control my-2"
                            placeholder="Digite seu E-mail"
                            onChange={(e) => setEmail(e.target.value)}>
                        </input>
                        <button 
                            className="btn btn-lg btn-block btn-recupera" 
                            type="button"
                            onClick={handleRecupera}
                            >
                                Recuperar Senha
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
    
}

export default UsuarioRecupera;