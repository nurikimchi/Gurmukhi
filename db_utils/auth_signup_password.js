import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../firebaseConfig'


export const auth_signup_password = (email, password, username) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return { errorCode, errorMessage };
    })
}