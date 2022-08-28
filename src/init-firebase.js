// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 
import  {getFirestore} from 'firebase/firestore'
 
const firebaseConfig = {
  apiKey: "AIzaSyCTVNmmzA5iRpwn6tyoRrf_FOIWpfBmf_0",
  authDomain: "fir-react-c143b.firebaseapp.com",
  projectId: "fir-react-c143b",
  storageBucket: "fir-react-c143b.appspot.com",
  messagingSenderId: "776782369431",
  appId: "1:776782369431:web:1651c62449986a16e28fd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

 export const db = getFirestore(app)
