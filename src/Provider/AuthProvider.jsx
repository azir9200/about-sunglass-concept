import { createContext } from "react";
export const AuthContxt = createContext(null)
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Config/firebaseCofig";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

  const googleLogin = () => {

    return signInWithPopup(auth, googleProvider)
  }
  const user = 'kodom ali'


  const authentications = {
    googleLogin,
    user
  }


  return (
    <AuthContxt.Provider value={authentications} >
      {children}
    </AuthContxt.Provider>
  );
};

export default AuthProvider;