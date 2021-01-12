import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAKWQUqiI6VEgSdlYPgB966OVTCEmFLM0k",
    authDomain: "movie-f43b9.firebaseapp.com",
    projectId: "movie-f43b9",
    storageBucket: "movie-f43b9.appspot.com",
    messagingSenderId: "399828279686",
    appId: "1:399828279686:web:86a1daafe7541015b90c07"
  };

export default firebase.initializeApp(firebaseConfig);