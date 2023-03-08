import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import app from './firebase';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const handleLogin = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log('User logged in successfully');
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
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-heading">Log in</h1>
        <form onSubmit={handleLogin} className="login-form">
          <label>
            Email:
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="login-input" placeholder="Email" required />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="login-input" placeholder="Password" required />
          </label>
          <button type="submit" className="login-button">Log in</button>
        </form>
        <div className="google-login">
          <button onClick={handleGoogleLogin} className="login-button">
            Log in with Google
          </button>
        </div>
        <p className="login-text">
          Don't have an account?{' '}
          <button onClick={() => navigate('/signup')} className="login-link">
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
