import{firebase,googleAuthProvider} from '../firebase/FirebaseConfig'

export const login = () =>{
   localStorage.setItem('userLoggedIn','true'); 
   return firebase.auth().signInWithPopup(googleAuthProvider);
}
export const logout = () =>{
   localStorage.removeItem('userLoggedIn');
   return firebase.auth().signOut();
}