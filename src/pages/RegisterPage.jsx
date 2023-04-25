import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { auth } from '../firebase/firebase';
import { toast } from 'react-hot-toast';
import RegisterForm from '../components/auth/RegisterForm';

function RegisterPage() {
  function register({ email, password }) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success('WP MATE, You REGISTERED');
      })
      .catch((error) => {
        toast.error('Toks user Jau yra');
      });
  }

  return (
    <div className='container'>
      <RegisterForm onRegister={register} />
    </div>
  );
}

export default RegisterPage;
