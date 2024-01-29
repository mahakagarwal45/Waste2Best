// src/Login.js
// import React, { useState } from "react";
// import { auth, googleProvider } from "./firebase";
// import "./Login.css";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleEmailPasswordLogin = async () => {
//     try {
//       const result = await auth.signInWithEmailAndPassword(email, password);
//       console.log(result.user); // Optional: Log the user details
//       setError(null);
//       navigate("/dashboard");
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   const handleSocialLogin = async (provider) => {
//     try {
//       const result = await auth.signInWithPopup(provider);
//       console.log(result.user); // Optional: Log the user details
//       setError(null);
//       navigate("/dashboard");
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <>
//     <div className="login-container">
//       <h2>Login</h2>
//       {error && <p className="error-message">{error}</p>}
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleEmailPasswordLogin}>Login with Email/Password</button>
//       {/* Google Sign-In button */}
//       <button onClick={() => handleSocialLogin(googleProvider)}>Login with Google</button>
//     </div>
//     </>

//   );
// };

// export default Login;

import React from "react";
import "./Login.css";
import firebase from 'firebase/app';
import 'firebase/auth';
// Import Firebase dependencies
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCWPkNWWl1mJqxk5q-Vfp0zaKf1hmiNG8Y",
  authDomain: "waste2best-85b0d.firebaseapp.com",
  projectId: "waste2best-85b0d",
  storageBucket: "waste2best-85b0d.appspot.com",
  messagingSenderId: "406540200873",
  appId: "1:406540200873:web:157322c17c02fd91d432b8",
  measurementId: "G-294VQGYRCN"
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
            Submit
          </button>
          <div className="google-box">
          <button type="button" className="btn" onClick={this.handleGoogleSignUp}>
            Sign Up with Google 
          </button>
        </div>
        <div className="signup-link">
              Don't have an account? <span onClick={this.handleSignUp}>Register</span>
        </div>
        </form>
        </div>
        {/* ... existing code ... */}
      </div>
    );
  }
}

export default Login;

