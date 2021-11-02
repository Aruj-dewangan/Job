import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAdNVMzNIfea6jjtrIsh7p2E09qO_7cbP0",
  authDomain: "job-portel-3172b.firebaseapp.com",
  projectId: "job-portel-3172b",
  storageBucket: "job-portel-3172b.appspot.com",
  messagingSenderId: "796993117058",
  appId: "1:796993117058:web:45926e06d12fda9ed34d9b"
};

// Initialize Firebase
if(!firebase.apps.length)
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()                                   