import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyDqD-k86ULZsJ9lamqRsELct747H1KMvaw",
  authDomain: "sunsushi-51848.firebaseapp.com",
  projectId: "sunsushi-51848",
  storageBucket: "sunsushi-51848.appspot.com",
  messagingSenderId: "648030354686",
  appId: "1:648030354686:web:12440bcbb525cc7aac39af",
  measurementId: "G-36LD2NQJ3G",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
