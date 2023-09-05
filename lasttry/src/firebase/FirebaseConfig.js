import firebase from "firebase/app";
import 'firebase/database'
import 'firebase/auth'


// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyDsAmvPDEabJM6yvgROmyQb1o9KvJf0YrQ",
  authDomain: "lasttry-e98bc.firebaseapp.com",
  projectId: "lasttry-e98bc",
  databaseURL:"https://lasttry-e98bc-default-rtdb.firebaseio.com",
  storageBucket: "lasttry-e98bc.appspot.com",
  messagingSenderId: "490884373270",
  appId: "1:490884373270:web:ebc9e0cb846ea314688e37"
};


firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {database as default,googleAuthProvider,firebase}

