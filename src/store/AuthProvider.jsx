import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase';
import { toast } from 'react-toastify';

const AuthContext = createContext({
  user: {},
  isLoading: false,
  login() {},
  logout() {},
  register() {},
});

//pakeiciam authcontext pavadinima 'Components'
AuthContext.displayName = 'Autentifikacija';

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //vartotojo prisijungimas:
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        console.log('prisijungimas ===', user.email);
        setUser(user);
      } else {
        // User is signed out
        // ...
        console.log('logout User');
        setUser(null);
      }
    });
  }, []);

  const isLoggedIn = !!user;

  function login(userObj) {
    setUser(userObj);
    toast.success('Welcome');
  }

  function logout(userObj) {
    setUser(null);
    toast.error('Bye Bye');
  }

  const authCtx = {
    user,
    isLoading,
    setIsLoading,
    isLoggedIn,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authCtx}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;

export function useAuthCtx() {
  return useContext(AuthContext);
}
