import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase';
import PropTypes from 'prop-types';

const AuthContext = createContext({
  user: {},
  isLoading: false,
});

AuthContext.displayName = 'Autentifikacija';

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
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
