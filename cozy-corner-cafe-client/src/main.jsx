import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import AddCoffee from './components/AddCoffee.jsx'
import UpdatedCoffee from './components/UpdatedCoffee.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/coffee')
  },
  {
    path: "addCoffee",
    element: <AddCoffee></AddCoffee>
  },
  {
    path: "updatedCoffee/:id",
    element: <UpdatedCoffee></UpdatedCoffee>,
    loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
