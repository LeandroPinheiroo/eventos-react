import React, {useState, useEffect} from 'react';
import NavBar from '../../components/nav-bar';
import './evento-cadastro.css';
import {NotificationManager} from 'react-notifications';
import firebase from '../../config/firebase'
import {useSelector, useDispatch} from 'react-redux';

function EventoCadastro(){

    const [showSpinner, setShowSpinner] = useState(false)

    const [titulo,setTitulo] = useState();
    const [tipo,setTipo] = useState();
    const [detalhe,setDetalhe] = useState();
    const [data,setData] = useState();
    const [hora,setHora] = useState();
    const [fotoNova,setFotoNova] = useState();

    const user = useSelector(state => state.user.usuarioEmail)

    const storage = firebase.storage(); 
    const db = firebase.firestore(); 

    function handleCadastrar(){
        setShowSpinner(true);
        db.collection("eventos").add({
            titulo:titulo,
            tipo:tipo,
            detalhe:detalhe,
            data:data,
            hora:hora,
            visualizacoes:0,
            criacao:new Date(),
            publico:1,
            user:user
        }).then( () => {
            storage.ref(`imagens/${fotoNova.name}${new Date().getTime()}`)
            .put(fotoNova).then( () =>{
                NotificationManager.success('Evento Cadastrado!', 'Sucesso');
            }).catch( (res) => {
                NotificationManager.error('Erro ao cadastrar Foto!', 'Erro');
            }).finally(()=>{
                setShowSpinner(false);
            });
        }).catch( (res) => {
            NotificationManager.error('Erro ao cadastrar!', 'Erro');
        });
    }
    
    const Spinner = () => (
        <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    )



   return (
       <>
          <NavBar/>

          <div className="col-12 mt-5">

               <div className="row">
                   <h3 className="mx-auto font-weight-bold">Novo evento</h3>
               </div>

               <form>
                   <div className="form-group">
                       <label>Título:</label>
                       <input type="text" className="form-control"
                        onChange={(e) => setTitulo(e.target.value)}/>
                   </div>

                   <div className="form-group">
                       <label>Tipo do evento:</label>
                       <select className="form-control"
                       onChange={(e) => setTipo(e.target.value)}>
                          <option disabled selected>Selecione um tipo</option>
                          <option>Festa</option>
                          <option>Palestra</option>
                          <option>Teatro</option>
                          <option>Show</option>
                       </select>
                   </div>
                   
                   <div className="form-group">
                       <label>Descrição:</label>
                       <textarea rows="3" className="form-control" onChange={(e) => setDetalhe(e.target.value)}/>
                   </div>

                   <div className="form-group row">
                       <div className="col-6"> 
                         <label>Data:</label>
                         <input type="date" className="form-control" onChange={(e) => setData(e.target.value)}/>
                       </div>

                       <div className="col-6"> 
                         <label>Hora:</label>
                         <input type="time" className="form-control" onChange={(e) => setHora(e.target.value)}/>
                       </div>
                   </div>

                   <div className="form-group">
                       <label>Upload de foto:</label>
                       <input type="file" className="form-control" onChange={(e) => setFotoNova(e.target.files[0])}/>
                   </div>


                   <div className="row">
 
                       <div className="col-3"> 
                            <button type="button" className="btn btn-lg btn-block mt-3 btn-cadastra" onClick={handleCadastrar}>
                                Publicar Evento
                            </button>
                       </div>

                   </div>
                   { showSpinner ? <Spinner /> : null }
               </form> 
          </div>
       </>
   )
}


export default EventoCadastro;
