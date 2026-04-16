import { jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { onAuthStateChanged, signOut as firebaseSignOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
const AuthContext = createContext({
  currentUser: null,
  loading: true,
  signOut: async () => {
  }
});
function useAuth() {
  return useContext(AuthContext);
}
function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  const value = useMemo(
    () => ({
      currentUser,
      loading,
      signOut: () => firebaseSignOut(auth)
    }),
    [currentUser, loading]
  );
  return /* @__PURE__ */ jsx(AuthContext.Provider, { value, children });
}
export {
  AuthProvider,
  useAuth
};
