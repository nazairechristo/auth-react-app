import React, { useState } from 'react';
import firebase from '../firebase';

import { auth } from '../firebase';

const Create = () => {

    const uid = auth.currentUser.uid;

    console.log(uid);


    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');

    const createQuote = () => {
        const quotesDB = firebase.database().ref('quotesDB');

        const quote = {
            uid,
            author,
            text,
        };

        quotesDB.push(quote);

        setAuthor('');
        setText('');
    }

    return (
        <div className='create'>
            <div className='quote-form'>
                <input type='text' placeholder='Author' value={author} onChange={(e) => setAuthor(e.target.value)} />
                <textarea placeholder='Quote' value={text} onChange={(e) => setText(e.target.value)}/>
                <button onClick={createQuote}>Create</button>
            </div>
        </div>
    )
}

export default Create;