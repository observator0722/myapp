import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { router } from './App';

export const firebaseAuthProvider = {
  isAuthenticated: () => {
    return !!localStorage.getItem("userData")
  },
  signin: async (username, password) => {
    const auth = getAuth();
    const userData = await signInWithEmailAndPassword(auth, username, password)
    localStorage.setItem("userData", JSON.stringify(userData))
    return userData
  },
  signUp: async (username, password) => {
    const auth = getAuth();
    const userData = await createUserWithEmailAndPassword(auth, username, password)
    localStorage.setItem("userData", JSON.stringify(userData))
    return userData
  },
  signout: async () => {
    localStorage.removeItem("userData")
    router.navigate('/')
  },
}
