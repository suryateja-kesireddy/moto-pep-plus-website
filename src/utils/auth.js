import {

  getAuth,
  signInWithEmailAndPassword,
  signOut,

} from "firebase/auth";

import { app } from "./firebase";

const auth = getAuth(app);

/* LOGIN */
export const adminLogin = async (
  email,
  password
) => {

  return await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

};

/* LOGOUT */
export const adminLogout = async () => {

  return await signOut(auth);

};

export { auth };