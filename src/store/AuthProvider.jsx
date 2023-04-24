import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase';
import PropTypes from 'prop-types';

const AuthContext = createContext({
  user: {},
  isLoading: false,
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
        // const uid = user.uid;
        // ...
        // console.log('prisijungimas ===', user.email);
        setUser(user);
      } else {
        // User is signed out
        // ...
        // console.log('logout User');
        setUser(null);
      }
    });
  }, []);

  const isLoggedIn = !!user;

  const authCtx = {
    user,
    isLoading,
    setIsLoading,
    isLoggedIn,
  };

  return (
    <AuthContext.Provider value={authCtx}>{children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

AuthContext.propTypes = {
  user: PropTypes.object,
  isLoading: PropTypes.bool,
};

export default AuthProvider;

export function useAuthCtx() {
  return useContext(AuthContext);
}
