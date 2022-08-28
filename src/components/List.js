
import {collection,getDocs,deleteDoc, doc} from 'firebase/firestore'
import { useEffect, useState } from 'react';
import { db } from '../init-firebase';
import { movieCollectionRef } from './firebase_concation';

function List(props) {  
     const [movies , setmovies] = useState([]); 

    useEffect(() => {
        getMovies()

    },[])


    useEffect(() => { 
        // console.log(movies);
    },[movies])

    function getMovies() {
        // const movieCollectionRef = collection(db, 'movies')
        getDocs(movieCollectionRef)
        .then(response => {
            // console.log(response.docs);
            const movs = response.docs.map(doc => ({
                  data: doc.data(),
                  id:doc.id,
            }))
            setmovies(movs)
           
        })
        .catch(error => console.log(error.message));

    }
    // console.log("hello world ");

    const deletMovie = (id) => {
        alert(id)
        const docRef = doc(db , 'movie' , id);
        deleteDoc(docRef).
        then((response) => console.log("document delet")).
        catch((error) => console.log(error.message))


    } 
    return (
      <>
        <button onClick={() => getMovies()}> movie name</button>
         <ul>
             {
                movies.map(movi => (
                    <li key={movi.id}>{ movi.data.name}  :{movi.id}
                    <button onClick={() => deletMovie(movi.id)}>DELETE</button>
                    </li>
                )) 
                
             }
         </ul>
         
      </>
    );
}

export default List;