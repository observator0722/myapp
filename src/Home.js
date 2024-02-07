import { Link, Outlet } from "react-router-dom"

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
        </ul>
      </nav>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}
export default Home