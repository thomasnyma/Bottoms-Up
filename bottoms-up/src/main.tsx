import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './pages/Error';
import Play from './pages/Play';
import Root from './pages/Root';
import Rules from './pages/Rules';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />
  },
  {
    path: "/play",
    element: <Play />,
  },
  {
    path: "/rules",
    element: <Rules />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>
  </React.StrictMode>,
)
