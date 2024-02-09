import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { fakeAuthProvider } from "./authSvc";

const Login = () => {
  const location = useLocation();

  let params = new URLSearchParams(location.search);
  let from = params.get("from") || "/";

  const navigate = useNavigate();
  
  const [username, setUsername] = useState('')

  const handleSubmit = async () => {
    await fakeAuthProvider.signin(username);

    navigate(from)
  }

  return (
    <div>
      <input value={username} onChange={e => {setUsername(e.target.value)}} />
      <button onClick={handleSubmit}>Log In</button>
    </div>
  )
}
export default Login