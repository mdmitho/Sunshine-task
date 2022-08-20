// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL22c8d9-f47hmwp5KegE4C2nyK_WDAjY",
  authDomain: "sunshine-task.firebaseapp.com",
  projectId: "sunshine-task",
  storageBucket: "sunshine-task.appspot.com",
  messagingSenderId: "326715089145",
  appId: "1:326715089145:web:515d8d5689d1cb7286c228",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;