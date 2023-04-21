import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { auth } from '../firebase/firebase';
import { toast } from 'react-hot-toast';
import RegisterForm from '../components/auth/RegisterForm';

function RegisterPage() {
  function register({ email, password }) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('user ===', user);
        toast.success('WP MATE, You REGISTERED');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('errorCode ===', errorCode);
        console.log('errorMessage ===', errorMessage);
        toast.error('Something wrong...');
        // ..
      });
  }

  return (
    <div className='container'>
      <h1>Register</h1>
      <RegisterForm onRegister={register} />
    </div>
  );
}

export default RegisterPage;
