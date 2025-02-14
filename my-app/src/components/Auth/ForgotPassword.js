import React, { useRef, useState } from 'react';
import './ForgotPasswordStyles.css';
import { CircularProgress } from '@mui/material';

export default function ForgotPassword() {
  const [emailError, setEmailError] = useState(null);
  const emailInputRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  async function submitHandler(e) {
    e.preventDefault();
    const email = emailInputRef.current.value;

    // Add your email verification logic here
    try {
      setIsLoading(true);
      const response = await fetch(
        'https://brainzacademy-backend-1.onrender.com/auth/forgot-password',
        {
          method: 'PATCH',
          body: JSON.stringify({ email }),
          headers: { 'Content-Type': 'application/json' },
        }
      );
      setIsLoading(false);

      if (response.status === 200) {
        // Handle success
        alert(
          'If an account with that email exists, we have sent a reset link to it.'
        );
      } else {
        const data = await response.json();
        setEmailError(data.errors.email);
      }
    } catch (error) {
      setEmailError('An error occurred');
    }
  }

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-form">
        <h2>Forgot Password</h2>
        <p>
          Please enter your email address. We will send you a link to reset your
          password.
        </p>
        <form onSubmit={submitHandler}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              ref={emailInputRef}
              placeholder="Enter your email"
              required
            />
          </div>
          {emailError && <p className="error-message">{emailError}</p>}
          <button type="submit" className="submit-button">
            {isLoading ? (
              <CircularProgress
                size={18}
                thickness={4}
                sx={{ color: 'white', padding: 0, margin: 0 }}
              />
            ) : (
              'Send Reset Link'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
