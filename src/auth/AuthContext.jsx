import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import { createContext, useEffect, useState } from "react";
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [userStatus, setUserStatus] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const [viewLogin, setViewLogin] = useState(false);

  useEffect(() => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      setUserStatus(true);
      setViewLogin(false);

      console.log("user signed in ");

      // ...
    } else {
      setUserStatus(false);
      setViewLogin(true);

      console.log("user signed out");

      // User is signed out
      // ...
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, userStatus, viewLogin, setViewLogin }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
