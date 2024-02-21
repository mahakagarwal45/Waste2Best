import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCsUA7rDUjQnDKF86KpbPQ_OHD7YmMFFgE",
    authDomain: "waste2best-e11e5.firebaseapp.com",
    projectId: "waste2best-e11e5",
    storageBucket: "waste2best-e11e5.appspot.com",
    messagingSenderId: "436018174473",
    appId: "1:436018174473:web:2afb6dca5a6c3dab3bb6d8",
    measurementId: "G-HX9VY2JYZX"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider};