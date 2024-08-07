// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAdylucj2_vFgTOjr4vEGntKU8w9Q_-O_0",
    authDomain: "clone-eshop.firebaseapp.com",
    projectId: "clone-eshop",
    storageBucket: "clone-eshop.appspot.com",
    messagingSenderId: "125712700017",
    appId: "1:125712700017:web:23c8660ea528bb8e6b81d0",
    measurementId: "G-X8JQEP8B1Z"
  };


  const app = initializeApp(firebaseConfig);
  
  export const auth = getAuth();
  export default app;