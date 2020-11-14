import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyArs4DrrziWwX1d-SFavovhIw4BatIgJ5E",
    authDomain: "fb-clone-e73c7.firebaseapp.com",
    databaseURL: "https://fb-clone-e73c7.firebaseio.com",
    projectId: "fb-clone-e73c7",
    storageBucket: "fb-clone-e73c7.appspot.com",
    messagingSenderId: "446011693783",
    appId: "1:446011693783:web:78ed7e718ecc13791d2e92"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth =firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider}
  export default db;