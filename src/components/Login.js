import React from 'react';
import firebase from '../firebase';
import { auth } from '../firebase';
import { GoogleOutlined } from '@ant-design/icons';



const Login = () => {


    const signInWithGoogle = () => {
        const providerGoogle = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(providerGoogle);
        
    }

    


    return (
        <div className='login-page'>
            <div className='login-content'>
                <h3>Welcome to QuoteApp</h3>

                <button className='login-button google' onClick={signInWithGoogle}>
                    <GoogleOutlined /> <span>Sign In with Google </span>
                </button>
               
 
            </div>
        </div>
    )
}


export default Login;

