import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDSlPbpYqvfc9N9LLNsM7bz64eRdrTjcEg",
    authDomain: "clone-9ce03.firebaseapp.com",
    databaseURL: "https://clone-9ce03.firebaseio.com",
    projectId: "clone-9ce03",
    storageBucket: "clone-9ce03.appspot.com",
    messagingSenderId: "735365355218",
    appId: "1:735365355218:web:dac9ef67cb2aac8764ff0b",
    measurementId: "G-3K4EL72G6W"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };