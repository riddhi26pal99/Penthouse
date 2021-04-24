import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBIH7TvmYr6VaIJrvS4fyVuvbntObfpURA",
  authDomain: "penthouse-51c0f.firebaseapp.com",
  projectId: "penthouse-51c0f",
  storageBucket: "penthouse-51c0f.appspot.com",
  messagingSenderId: "950975603345",
  appId: "1:950975603345:web:f7606753b11e25f2ff9530"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); 

export { auth, db, provider }; 