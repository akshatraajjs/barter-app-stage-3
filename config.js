import firebase from 'firebase';
require('@firebase/firestore')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX-G2Wj2sMTmQ9T57sjkVda2rIG0a2_VI",
  authDomain: "barter-app-akshat.firebaseapp.com",
  databaseURL: "https://barter-app-akshat.firebaseio.com",
  projectId: "barter-app-akshat",
  storageBucket: "barter-app-akshat.appspot.com",
  messagingSenderId: "523131199227",
  appId: "1:523131199227:web:5e967cd536a91df0e1da5e",
  measurementId: "G-W340S749ZR"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
