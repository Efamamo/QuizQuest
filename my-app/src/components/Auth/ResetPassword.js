import React, { useRef, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ResetPasswordStyles.css';
import { CircularProgress } from '@mui/material';

export default function ResetPassword() {
  const [newPasswordError, setNewPasswordError] = useState(null);
  const [tokenError, setTokenError] = useState(null);
  const [serverError, setServerError] = useState(false);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const newPasswordRef = useRef();

  const location = useLocation();

  useEffect(() => {
    // Extract token from URL
    const queryParams = new URLSearchParams(location.search);
    const tokenParam = queryParams.get('token');
    if (tokenParam) {
      setToken(tokenParam);
    } else {
      setTokenError('Invalid or missing token.');
    }
  }, [location.search]);

  async function submitHandler(e) {
    e.preventDefault();

    const newPassword = newPasswordRef.current.value;

    try {
      setIsLoading(true);
      const response = await fetch(
        `https://brainzacademy-backend-1.onrender.com/auth/reset-password?token=${token}`,
        {
          method: 'PATCH',
          body: JSON.stringify({ newPassword }),
          headers: { 'Content-Type': 'application/json' },
        }
      );
      setIsLoading(false);
      if (response.status === 204) {
        setTokenError(false);
        setNewPasswordError(false);
        setServerError(false);
        alert('Your password has been reset successfully.');
        navigate('/login');
      } else {
        const data = await response.json();
        if (data['newPassword']) {
          setNewPasswordError(data['newPassword']);
        }
        if (data['token']) {
          setTokenError(data['token']);
        } else {
          setServerError('An error occurred');
        }
      }
    } catch (error) {
      setServerError('An error occurred');
    }
  }

  return (
    <div className="reset-password-container">
      <div className="reset-password-form">
        <h2>Reset Password</h2>
        <p>Enter your new password to reset your password.</p>
        <form onSubmit={submitHandler}>
          <div className="input-group">
            <label htmlFor="newPassword">New Password</label>
            <input
              id="newPassword"
              type="password"
              ref={newPasswordRef}
              placeholder="Enter your new password"
              required
            />
            {newPasswordError && (
              <p className="error-message">{newPasswordError}</p>
            )}
            {tokenError && <p className="error-message">{tokenError}</p>}
          </div>
          {serverError && <p className="error-message">{serverError}</p>}
          <button type="submit" className="submit-button">
            {isLoading ? (
              <CircularProgress
                size={18}
                thickness={4}
                sx={{ color: 'white', padding: 0, margin: 0 }}
              />
            ) : (
              'Reset Password'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
