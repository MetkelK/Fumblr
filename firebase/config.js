import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Firebase configuration
var firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "fumblr-a43b3.firebaseapp.com",
  projectId: "fumblr-a43b3",
  storageBucket: "fumblr-a43b3.appspot.com",
  messagingSenderId: "946728572283",
  appId: "1:946728572283:web:2e6d2c7e203a327db359de",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
