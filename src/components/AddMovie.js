import React, { useState } from 'react';

import {collection,addDoc } from 'firebase/firestore'
import { db } from '../init-firebase';
import { movieCollectionRef } from './firebase_concation';

function AddMovie(props) {
    const [name, setname] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '') {
            return
        }
        // const movieCollectionRef = collection(db, 'movies')
        addDoc(movieCollectionRef  , {name})
        .then( response=> {
            console.log(response);
        })
        .catch(error => {
            console.log(error.message);
        })
        alert(name)
    }
    return (
        <>
            <h4>
                add movies
            </h4>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={e => setname(e.target.value)}
                />

                <button type="submit">add movie </button>
            </form>
        </>
    );
}

export default AddMovie;