// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_yu6zLr2D0ZiMhCPzvjIhP5GxzvREfKk",
  authDomain: "fir-react-dd132.firebaseapp.com",
  projectId: "fir-react-dd132",
  storageBucket: "fir-react-dd132.appspot.com",
  messagingSenderId: "118495116735",
  appId: "1:118495116735:web:9a1f0f7bc18deebc82b50a",
  measurementId: "G-MS10YY20KP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

