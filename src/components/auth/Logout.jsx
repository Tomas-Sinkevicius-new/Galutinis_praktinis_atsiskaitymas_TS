import React from 'react';
import { useAuthCtx } from '../../store/AuthProvider';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { toast } from 'react-hot-toast';
import '../auth/logout.scss';

function Logout() {
  const { isLoggedIn, user } = useAuthCtx();

  function logoutFN() {
    signOut(auth)
      .then(() => {
        toast(`Good Job! BYE! ${user.email}`, {
          icon: '😭',
        });
      })
      .catch((error) => {
        if (!user) {
          toast.error('Something went wrong...');
        }
      });
  }

  return !isLoggedIn ? null : (
    <button className='logoutBtn' onClick={logoutFN}>
      Logout
    </button>
  );
}

export default Logout;
