import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { firebaseAuthProvider } from "./authSvc";

const Login = () => {
  const location = useLocation();

  let params = new URLSearchParams(location.search);
  let from = params.get("from") || "/";

  const navigate = useNavigate();

  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')


  const handleSubmit = async () => {
    try {
      await firebaseAuthProvider.signin(username, password);
      navigate(from)
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div>
      <input value={username} onChange={e => { setUsername(e.target.value) }} />
      <input value={password} onChange={e => { setPassword(e.target.value) }} />
      <button onClick={handleSubmit}>Log In</button>
      <div>{error}</div>

    </div>
  )
}
export default Login