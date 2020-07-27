import React from 'react';
// import * as firebaseui from 'firebaseui';
// const firebase = require('firebase');

// const ui = new firebaseui.auth.AuthUI(firebase.auth());

// ui.start('#firebaseui-auth-container', {
//   signInOptions: [
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID
//   ],
// });

interface LoginProps {
  authenticate: Function
}

const Login: React.FC<LoginProps> = props => (
  <>
    <h2>Login</h2>
    <div id="firebaseui-auth-container"></div>
    <div id="loader">Loading...</div>
    <button onClick={() => props.authenticate('Google')}>Login</button>
  </>
);

export default Login;
