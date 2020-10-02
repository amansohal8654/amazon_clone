import firebase from 'firebase';
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDgr2DgmZHFb8uVauFA9ulMIM3SK-7idKg",
    authDomain: "clone-8cb49.firebaseapp.com",
    databaseURL: "https://clone-8cb49.firebaseio.com",
    projectId: "clone-8cb49",
    storageBucket: "clone-8cb49.appspot.com",
    messagingSenderId: "1013460502862",
    appId: "1:1013460502862:web:c550507f8691e509fa361f",
    measurementId: "G-KB3SJEDLF3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);


  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export{db, auth};