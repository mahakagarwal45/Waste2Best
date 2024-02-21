
import React from "react";
import "./Login.css";
// import firebase from 'firebase/app';
import 'firebase/auth';
import {Link} from 'react-router-dom';// Import Firebase dependencies
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCsUA7rDUjQnDKF86KpbPQ_OHD7YmMFFgE",
  authDomain: "waste2best-e11e5.firebaseapp.com",
  projectId: "waste2best-e11e5",
  storageBucket: "waste2best-e11e5.appspot.com",
  messagingSenderId: "436018174473",
  appId: "1:436018174473:web:2afb6dca5a6c3dab3bb6d8",
  measurementId: "G-HX9VY2JYZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleGoogleSignUp = this.handleGoogleSignUp.bind(this);
  }

  handleLogin = () => {
    // Add logic to handle login here
    console.log('handleLogin called');
    const { email, password } = this.state;
    console.log('Email:', email);
    console.log('Password:', password);

    console.log("Login button clicked");
  };

  handleSignUp = () => {
    const { email, password } = this.state;

    // Create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User created:", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error:", errorCode, errorMessage);
        alert(errorMessage);
      });
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User signed up with Google:", user);

      // Store user data in Firebase Realtime Database
      const database = getDatabase(app);
      const userRef = ref(database, 'users/' + user.uid);
      set(userRef, {
        email: user.email,
        displayName: user.displayName, // Add user's display name
        photoURL: user.photoURL,       // Add user's photo URL

        // Add other user data as needed
      });

      // Add logic for post-signup actions
    } catch (error) {
      console.error(error.message);
    }
  };

  render() {
    console.log('Rendering Login component');
    return (
      <div className="base-container" ref={this.props.containerRef}>
        {/* ... existing code ... */}
        <div className="box">
          <div className="header">
            <h2>Login</h2>
          </div>
        <form>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email"><b>E-mail:</b> </label>
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password"><b>Password:</b></label>
              <input
                type="password"
                name="password"
                placeholder="Enter your Password"
                autoComplete="new-password"
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <button type="button" className="btn" onClick={this.handleLogin}>
           <Link to="/"> Submit</Link>
          </button>
          <div className="google-box">
          <button type="button" className="btn" onClick={this.handleGoogleSignUp}>
            Sign Up with Google 
          </button>
        </div>
        <div className="signup-link">
              Don't have an account? <span onClick={this.handleSignUp}><Link to="/register">Register</Link></span>
        </div>
        </form>
        </div>
        {/* ... existing code ... */}
      </div>
    );
  }
}

export default Login;

