import React, { useState } from 'react';
import firebase from '../firebase';
import { auth } from '../firebase';




const UpdateAndDelete = ({ item }) => {

    const uidCurrent = auth.currentUser.uid;

    

    const [update, setUpdate] = useState(false);
    const [authorUpdate, setAuthorUpdate] = useState(null);
    const [textUpdate, setTextUpdate] = useState(null);

  

    const itemUpdate = () => {

        let quote = firebase.database().ref('quotesDB').child(item.id);

        if (authorUpdate !== null) {
            quote.update({
                author: authorUpdate
            });
        }


        if (textUpdate !== null) {
            quote.update({
                text: textUpdate
            });
        }
        setUpdate(false);
    };

   
   
    const itemDelete = () => {
        let quote = firebase.database().ref('quotesDB').child(item.id);
        quote.remove();
    }

    return (
      <li>
        {update === false && (
          <p>
            " {item.text} "<br />
            <span>- {item.author}</span>
          </p>
        )}

        {item.uid === uidCurrent && (
          <div className="buttons-container">
            <button onClick={() => setUpdate(!update)}>Update</button>
            <button onClick={itemDelete}>Delete</button>
          </div>
        )}

        {update && (
          <div className="update-container">
            <textarea
              defaultValue={item.text}
              onChange={(e) => setTextUpdate(e.target.value)}
            />
            <input
              defaultValue={item.author}
              onChange={(e) => setAuthorUpdate(e.target.value)}
            />
            <button onClick={itemUpdate}>save</button>
          </div>
        )}
      </li>
    );
}

export default UpdateAndDelete;