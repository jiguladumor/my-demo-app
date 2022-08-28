import { doc, updateDoc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { db, } from '../init-firebase';

function EditMovie(props) {
    const [name, setname] = useState('')
    const [id, setid] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || id === '') {
            return
        }
        console.log(id,name);
        const docRef = doc(db, 'movies', id)
        updateDoc(docRef, { name  : name})
            .then(response => {
                console.log(response);
            }).catch(error =>
                console.log(error)
            )
        //    setDoc(docRef, {age : 26 } )
        //    .then( response => {
        //      console.log(response);
        //    }).catch( error => 
        //       console.log(error)
        //     )
    }
    return (
        <>
            <h4>
                edit movies
            </h4>
            <form onSubmit={handleSubmit}>

                <br></br>
                <label htmlFor='id'> movie id  </label>
                <input
                    id="id"
                    type="text"
                    value={id}
                    onChange={e => setid(e.target.value)}
                />
                <label htmlFor='id'> movie  name  </label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={e => setname(e.target.value)}
                />



                <br></br>

                <button type="submit">update  movie </button>
            </form>
        </>
    );
}

export default EditMovie;