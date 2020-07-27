import React from 'react';
import firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import Login from './components/Login';

interface App {
  authenticate: Function
}

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB8ePJMEmOut_XTCyx5yYcnd4gh9LW96vY",
//   authDomain: "wishlist-gift.firebaseapp.com",
//   databaseURL: "https://wishlist-gift.firebaseio.com",
//   projectId: "wishlist-gift",
//   storageBucket: "wishlist-gift.appspot.com",
//   messagingSenderId: "71230381810",
//   appId: "1:71230381810:web:3671dae19dc61065e83a6b"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

const App: React.FC = () => {

  // const authHandler = async (authData: any) => {
  //   console.log(authData);
  // }

  const authenticate = (provider: string) => {
    // const authProvider = new firebase.auth.GoogleAuthProvider();
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', {
      signInOptions: [
        // List of OAuth providers supported.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ],
      // Other config options...
    });
  }

  return (
    <Login authenticate={authenticate} />
  );
}

export default App;
