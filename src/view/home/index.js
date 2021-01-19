import React,{useState} from 'react';
import './home.css';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import firebase from '../../config/firebase'
import 'firebase/auth'
import NavBar from '../../components/nav-bar';



function Home(){
    
    return (
    
        <div>
            <NavBar/>
        </div>
    
    );
}

export default Home;