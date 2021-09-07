import React from 'react';
import firebase from '../firebase';
import { auth } from '../firebase';
import Create from './Create';
import Read from './Read';


const Main = () => {

    const logout = () => {
        console.log('logout');
        firebase.auth().signOut();
        
    }

    return (
        <div className='main'>
            <div className='main-content'>
                <div className='user-info'>
                    <img src={auth.currentUser.photoURL} alt='user' />
                    <h2>Hello , {auth.currentUser.displayName}</h2>
                    <div className='logout' onClick={logout}><span>Sign Out</span></div>
                </div>
                <div className='app-content'>
                    <Create />
                    <Read />
                </div>
            </div>
        </div>
    )
}


export default Main;