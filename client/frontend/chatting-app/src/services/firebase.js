import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCz452laVh_CFOSsL94Xnq8fV05fvVsH1Y",
    authDomain: "slider-react-ea3d9.firebaseapp.com",
    projectId: "slider-react-ea3d9",
    storageBucket: "slider-react-ea3d9.appspot.com",
    messagingSenderId: "606699125537",
    appId: "1:606699125537:web:b8bac4ef7989f94ea35c60"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const fbStorage = firebase.storage()
  const fbFirestore = firebase.firestore()
  const timeStamp = firebase.firestore.FieldValue.serverTimestamp

  export {fbStorage, fbFirestore, timeStamp}