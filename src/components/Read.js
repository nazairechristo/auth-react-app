import React, { useEffect, useState } from 'react';
import firebase from '../firebase';

import UpdateAndDelete from './UpdateAndDelete';


const Read = () => {
    const [quoteList, setQuoteList] = useState([]);


    useEffect(() => {
        const quotesDB = firebase.database().ref('quotesDB');

        quotesDB.on('value', (snapshot) => {
            
            let list  = [];
            let listSource = snapshot.val();
            console.log(listSource);

            for(let id in listSource) {
                list.push({id, ...listSource[id]});
            }
            setQuoteList(list);
            

        })
    },[]);


    console.log(quoteList);

    return (
        <div className='box-quotes'>
            <ul>
                { quoteList &&
                    quoteList.map((item, index) => (
                        <UpdateAndDelete item={item} key={index}/>
                ))
                }

            </ul>
        </div>
    )
}

export default Read;