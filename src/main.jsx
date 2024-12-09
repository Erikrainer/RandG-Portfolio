import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
import Error from './pages/ErrorPage';
import Home from './pages/HomePage';
import Contact from './pages/ContactPage';
import About from './pages/AboutPage';
import JavaScriptProject from './pages/ProjectPage';
import Resume from "./pages/ResumePage"
import UnrealProject from "./pages/UnrealProjectPage"


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/JavaScriptProject',
        element: <JavaScriptProject />,
      },
      {
        path:"/UnrealProject",
        element: <UnrealProject />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
