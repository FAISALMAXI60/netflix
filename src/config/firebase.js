import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCZJjMh3bW-yJ8E4rxIoEfO7PnOyDGpwZY",
  authDomain: "netflix-730cf.firebaseapp.com",
  projectId: "netflix-730cf",
  storageBucket: "netflix-730cf.appspot.com",
  messagingSenderId: "849700245812",
  appId: "1:849700245812:web:304924fe2526a668fe5561",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();
