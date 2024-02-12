import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import PublicPage from './PublicPage';
import PrivatePage from './PrivatePage';
import { firebaseAuthProvider } from './authSvc';
import SignUp from './SignUp';

export const router = createBrowserRouter([
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
        loader: onlyNotAuthorizedLoader,
        element: <Login />
      },
      {
        path: '/sign-up',
        loader: onlyNotAuthorizedLoader,
        element: <SignUp />
      },
      {
        path: '/private',
        loader: protectedLoader,
        element: <PrivatePage/>
      }
    ]
  },
])

async function onlyNotAuthorizedLoader() {
  if (firebaseAuthProvider.isAuthenticated()) {
    return redirect("/");
  }
  return null;
}

function protectedLoader({request}) {
  if (!firebaseAuthProvider.isAuthenticated()) {
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
