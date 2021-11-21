import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = { //não publique o apiKey no github. use uma variavel
    apiKey: "AIzaSyByQZdVwueMyQb5uIzazWb7-G0nClDVY64",
    authDomain: "fir-project-857b8.firebaseapp.com",
    projectId: "fir-project-857b8",
    storageBucket: "fir-project-857b8.appspot.com",
    messagingSenderId: "975300254577",
    appId: "1:975300254577:web:77ae28b4c84164b2e134d0",
    measurementId: "G-DKQ68E6N4L"
  };

  const app = initializeApp(firebaseConfig)

  export const db = getFirestore(app) // o getFirestore está populando o db com todo o firestore information from app

