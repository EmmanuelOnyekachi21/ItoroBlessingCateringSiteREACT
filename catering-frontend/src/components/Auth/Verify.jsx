import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import api from '../../api';
import { toast } from 'react-toastify';
import { AlertCircle, CheckCircle, Loader2 } from 'lucide-react';

const Verify = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [verificationState, setVerificationState] = useState('loading');
  // const [errorMessage, setErrorMessage] = useState('')
  const [isRedirecting, setIsRedirecting] = useState(false);

  const token = searchParams.get('token');

  // Redirect after successful verification
  useEffect(() => {
    let redirectTimer;

    if (verificationState === 'success') {
      setIsRedirecting(true);
      redirectTimer = setTimeout(() => {
        navigate('/login');
      }, 5000);
    }

    return () => {
      if (redirectTimer) clearTimeout(redirectTimer);
    }
  }, [verificationState, navigate]);

  // Verify Email Function
  const verifyEmail = (token) => {
    api.get(`/api/auth/verify/?token=${encodeURIComponent(token)}`)
      .then(res => {
        setVerificationState('success');
        toast.success(res.data.Message);
      })
      .catch(err => {
        setVerificationState('error');
        // setErrorMessage("Invalid or Expired Token")
        toast.error('Unable to verify token.\nRegenerate token and try to verify again.');
      })
  }

  const hasRunRef = useRef(false);
  // On mount, check token and start verification
  useEffect(() => {
    console.log("Effect ran, token:", token);
    if (!token) {
      setVerificationState('token-missing');
      // setErrorMessage('Verification token is missing from the URL.');
      toast.error('The verification link appears incomplete or invalid.');
      return;
    }

    if (!hasRunRef.current){
      hasRunRef.current = true;
      console.log("Calling verifyEmail...");
      verifyEmail(token);
    } else {
    console.log("Skipped calling verifyEmail due to ref guard");
  }
  }, [token])

  // Render content based on verification state
  const renderContent = () => {
    switch (verificationState) {
      case 'loading':
        return (
          <div className='text-center' style={{ padding: '2rem' }}>
            <Loader2 className="spinner-icon mx-auto" />
            <h2>Verifying Your Email</h2>
            <p>Please wait while we verify your email address...</p>
          </div>
        );

      case 'success':
        return (
          <div className='text-center' style={{ padding: '2rem' }}>
            <CheckCircle className="success-icon mx-auto" />
            <h2 className="text-success">Email Verified Successfully!</h2>
            <p>Your email has been successfully verified. You can now log in to your account.</p>
            {isRedirecting && <p>Redirecting to login page in a few seconds...</p>}
          </div>
        );

      case 'error':
        return (
          <div className="text-center" style={{ padding: '2rem' }}>
            <AlertCircle className='warning-icon mx-auto' />
            <h2 className="text-warning">Invalid Verification Link</h2>
            <p>The verification link appears to be invalid.</p>
          </div>
        )

      default:
        return null;
    }
  }

  // Render action buttons
  const renderActionButtons = () => {
    if (verificationState === 'loading') return null;

    return (
      <div className="d-flex justify-content-center gap-3 flex-wrap mb-3">
        {verificationState === 'error' ? (
          <>
            <Link to='/regenerate-token' className='btn btn-primary'>Regenerate token</Link>
            <Link to="/" className="btn btn-link">Back to Home</Link>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-primary">Go to Login</Link>
            <Link to="/" className="btn btn-outline-secondary">Back to Home</Link>
          </>
        )}
      </div>
    );
  };


  return (
    <div className='bg-light' style={{ padding: '5rem' }}>
      <div className="card mx-auto" style={{ maxWidth: '480px' }}>
        <div className="card-header text-center">
          <h3>Email Verification</h3>
          <small className="text-muted">
            {verificationState === 'loading' ? 'Processing your verification request' : 'Verification complete'}
          </small>
        </div>
        <div className="card-body text-center">
          {renderContent()}
          {renderActionButtons()}
        </div>
      </div>

    </div>
  )
}

export default Verify