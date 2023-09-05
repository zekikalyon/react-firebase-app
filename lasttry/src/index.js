import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {getProductsFromDatabase } from './actions/products'
import {firebase} from './firebase/FirebaseConfig'


const store = configureStore();





//actıon


store.dispatch(getProductsFromDatabase());


 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
   <StrictMode>
   <Provider store={store}>
     <AppRouter />
   </Provider>
   </StrictMode>
 );

 firebase.auth().onAuthStateChanged(function(user){
   if(user){
    console.log("login")
     console.log(user)
   }
    else{
     console.log("logout")
   }
   })


reportWebVitals();