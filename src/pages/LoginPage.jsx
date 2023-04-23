import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase';
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
        // Signed in
        const user = userCredential.user;
        console.log('user ===', user);
        //naviguojam i Profile
        navigate('/shops');
        toast.success('Login successful');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('errorMessage ===', errorMessage);
        toast.error('somethings Worng');
      });
  }

  function loginWithGoole() {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log('user ===', user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.warn('errorMessage', errorMessage);
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  return (
    <div className='container'>
      <LoginForm onLoginWithGoogle={loginWithGoole} onLogin={login} />
    </div>
  );
}

export default LoginPage;
