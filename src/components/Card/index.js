import React, {useState, useEffect} from 'react';
import './card.css';
import { Link } from "react-router-dom";
import firebase from '../../config/firebase'

function EventoCard(){



   return (
        <div className="col-md-3 col-sm-12 card">
            <img className="card-img" src="https://via.placeholder.com/100x50" alt="Imagem do Cartão"/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text text-cartao">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="row rodape-cartao d-flex align-itens-center">
                <div className="col-6">
                    <Link to="/" className="btn btn-sm btn-detalhes">Detalhar</Link>
                </div>
                <div className="col-6">
                    <i className="fas fa-eye"></i><span>200</span>
                </div>
            </div>

        </div>
      
   )
}


export default EventoCard;
