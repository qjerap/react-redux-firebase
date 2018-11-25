import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyARUjOh8gp26lWG202krrlpFg-ctsBKXxE",
    authDomain: "react-redux-firebase-613b8.firebaseapp.com",
    databaseURL: "https://react-redux-firebase-613b8.firebaseio.com",
    projectId: "react-redux-firebase-613b8",
    storageBucket: "react-redux-firebase-613b8.appspot.com",
    messagingSenderId: "8358255505"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;