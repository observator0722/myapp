import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import PublicPage from './PublicPage';
import PrivatePage from './PrivatePage';
import { fakeAuthProvider } from './authSvc';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        index: true,
        element: <PublicPage />
      },
      {
        path: '/login',
        loader: loginLoader,
        element: <Login />
      },
      {
        path: '/private',
        loader: protectedLoader,
        element: <PrivatePage/>
      }
    ]
  },
])

async function loginLoader() {
  if (fakeAuthProvider.isAuthenticated) {
    return redirect("/");
  }
  return null;
}

function protectedLoader({request}) {
  if (!fakeAuthProvider.isAuthenticated) {
    let params = new URLSearchParams();
    params.set("from", new URL(request.url).pathname);
    return redirect("/login?" + params.toString());
  }
  return null;
}

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
