import { Link, Outlet } from "react-router-dom"
import { firebaseAuthProvider } from "./authSvc"

const Home = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Public page</Link>
          </li>
          <li>
            <Link to='/private'>Private page</Link>
          </li>
          <li>
            <Link to='/sign-up'>Sign Up page</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet/>
      </div>
      <button onClick={()=> firebaseAuthProvider.signout()}>Log out</button>
    </div>
  )
}
export default Home