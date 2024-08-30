import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseConfig'


export const auth_signin_password = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return { errorCode, errorMessage };
    });

};
