import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AuthStyles.css';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';

export default function Signup() {
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const auth = useSelector((state) => state.auth);
  const emailInputRef = useRef();
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  useEffect(() => {
    if (auth.isLoggedin) {
      navigate('/');
    }
  }, [auth.isLoggedin, navigate]);

  async function submitHandler(e) {
    e.preventDefault();
    const email = emailInputRef.current.value;
    const username = usernameInputRef.current.value;
    const password = passwordInputRef.current.value;
    try {
      setIsLoading(true);
      const response = await fetch(
        'https://brainzacademy-backend-1.onrender.com/auth/signup',
        {
          method: 'POST',
          body: JSON.stringify({
            email,
            username,
            password,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setIsLoading(false);
      const data = await response.json();

      if (response.status == 201) {
        setEmailError(false);
        setPasswordError(false);
        setUsernameError(false);
        setServerError(false);
        navigate('/check-email');
      } else {
        console.log(data);
        if (!data.errors['password']) {
          setPasswordError(false);
        }
        if (!data.errors['username']) {
          setUsernameError(false);
        }
        if (!data.errors['email']) {
          setEmailError(false);
        }
        if (!data.errors['server']) {
          setServerError(false);
        }
        for (const error in data.errors) {
          if (error === 'password') {
            setPasswordError(data.errors[error]);
          }
          if (error === 'username') {
            setUsernameError(data.errors[error]);
          }
          if (error === 'email') {
            setEmailError(data.errors[error]);
          }
          if (error === 'server') {
            setServerError('server error');
          }
        }
      }
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="outer-form-container">
      <div className="form-container">
        <h2>Signup</h2>

        <form onSubmit={submitHandler}>
          <div className="input-container">
            <label>Username</label>
            <input
              className="auth-input"
              ref={usernameInputRef}
              name="username"
              placeholder="Username"
              type="text"
              required
            />
            {usernameError ? <p className="error">{usernameError}</p> : null}
          </div>

          <div className="input-container">
            <label>Email</label>
            <input
              className="auth-input"
              ref={emailInputRef}
              name="email"
              placeholder="Email"
              type="email"
              required
            />
            {emailError ? <p className="error">{emailError}</p> : null}
          </div>
          <div className="input-container">
            <label>Password</label>
            <input
              className="auth-input"
              ref={passwordInputRef}
              name="password"
              placeholder="Password"
              type="password"
              required
            />
            {passwordError ? <p className="error">{passwordError}</p> : null}
          </div>

          {serverError ? <p className="error">{serverError}</p> : null}

          <button className="auth-button">
            {isLoading ? <CircularProgress
                size={18}
                thickness={4}
                sx={{ color: 'white', padding: 0, margin: 0 }}
              /> : 'Signup'}
          </button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export function CheckEmail() {
  return (
    <div className="verification-wrapper">
      <div className="verification-box">
        <h2>Email Verification Required</h2>
        <p>
          We've sent a verification link to your email address. Please check
          your inbox and click on the link to verify your account.
        </p>
        <p>
          If you've already verified your email,{' '}
          <Link to="/login">Proceed To Login</Link>.
        </p>
      </div>
    </div>
  );
}
