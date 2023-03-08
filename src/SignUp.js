import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import app from './firebase';
import './SignUp.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const handleSignUp = (event) => {
    event.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log('User signed up successfully');
        navigate('/dashboard');
      })
      .catch((error) => {
        console.log(error.message);
        alert('Invalid email or password. Please try again.');
      });
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then(() => {
        console.log('User signed in successfully with Google');
        navigate('/dashboard');
      })
      .catch((error) => {
        console.log(error.message);
        alert('Unable to sign in with Google. Please try again.');
      });
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h1 className="signup-heading">Sign up</h1>
        <form onSubmit={handleSignUp} className="signup-form">
          <label>
            Email:
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="signup-input" placeholder="Email" required />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="signup-input" placeholder="Password" required />
          </label>
          <button type="submit" className="signup-button">Sign up</button>
        </form>
        <div className="google-login">
          <button onClick={handleGoogleLogin} className="signup-button">
            Sign up with Google
          </button>
        </div>
        <p className="signup-text">
          Already have an account?{' '}
          <button onClick={() => navigate('/')} className="signup-link">
            Log in
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
