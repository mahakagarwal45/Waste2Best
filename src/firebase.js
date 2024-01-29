import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCWPkNWWl1mJqxk5q-Vfp0zaKf1hmiNG8Y",
    authDomain: "waste2best-85b0d.firebaseapp.com",
    projectId: "waste2best-85b0d",
    storageBucket: "waste2best-85b0d.appspot.com",
    messagingSenderId: "406540200873",
    appId: "1:406540200873:web:157322c17c02fd91d432b8",
    measurementId: "G-294VQGYRCN"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider};