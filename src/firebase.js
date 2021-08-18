import firebase from "firebase/app";
import "firebase/database"

var firebaseConfig = {
  apiKey: "AIzaSyBWzDTx73zYKf30nZg1zkXhiLk_NSDJOFM",
  authDomain: "react-contact-63b19.firebaseapp.com",
  databaseURL: "https://react-contact-63b19-default-rtdb.firebaseio.com",
  projectId: "react-contact-63b19",
  storageBucket: "react-contact-63b19.appspot.com",
  messagingSenderId: "498092978083",
  appId: "1:498092978083:web:319b48e262600775fa3416",
};
// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref()