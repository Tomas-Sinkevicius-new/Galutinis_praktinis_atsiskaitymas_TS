import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import { toast } from 'react-hot-toast';
import LoginForm from '../components/auth/LoginForm';

function LoginPage() {
  const navigate = useNavigate();

  function login({ email, password }) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('user ===', user);
        //naviguojam i Profile
        navigate('/profile');
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

  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm onLogin={login} />
    </div>
  );
}

export default LoginPage;
