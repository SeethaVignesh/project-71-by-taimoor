import firebase from 'firebase';
require('@firebase/firestore');
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDQPIoHAjpM8npYDGF_iT-xtyl7qVJxEo0',
  authDomain: 'wily-18b62.firebaseapp.com',
  databaseURL: 'https://wily-18b62.firebaseio.com',
  projectId: 'wily-18b62',
  storageBucket: 'wily-18b62.appspot.com',
  messagingSenderId: '894217098338',
  appId: '1:894217098338:web:3d2b89cf223a24fd736d3b',
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();
