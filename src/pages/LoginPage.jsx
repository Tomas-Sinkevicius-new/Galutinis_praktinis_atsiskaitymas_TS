import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../firebase/firebase';
import { toast } from 'react-hot-toast';
import LoginForm from '../components/auth/LoginForm';
import { useAuthCtx } from '../store/AuthProvider';

function LoginPage() {
  const navigate = useNavigate();
  const { setIsLoading } = useAuthCtx();

  function login({ email, password }) {
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate('/shops');
        toast.success(`Nice to Meet ya: ${user.email}`);
      })
      .catch((error) => {
        toast.error('somethings Worng');
      });
  }

  function loginWithGoole() {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        toast.success('Login Success');
      })
      .catch((error) => {
        toast.error('Something Wrong..');
      });
  }

  return (
    <div className='container'>
      <LoginForm onLoginWithGoogle={loginWithGoole} onLogin={login} />
    </div>
  );
}

export default LoginPage;
