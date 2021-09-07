import React, { useEffect, useState } from 'react';
import { auth } from './firebase';

import Login from './components/Login';
import Main from './components/Main';

const App = () => {


    const [isSignedIn, setSignedIn] = useState(false);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setSignedIn(!!user);
            console.log(user);
        })
    }, [])



    return (
        <div className="App">{isSignedIn ? <Main /> : <Login />}</div>
    );
}


export default App;