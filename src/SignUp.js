import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { firebaseAuthProvider } from "./authSvc";

const SignUp = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    try {
      await firebaseAuthProvider.signUp(username, password);
      navigate('/')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div>
      <input value={username} onChange={e => { setUsername(e.target.value) }} />
      <input value={password} onChange={e => { setPassword(e.target.value) }} />
      <button onClick={handleSubmit}>Sign Up</button>
      <div>{error}</div>
    </div>
  )
}

export default SignUp