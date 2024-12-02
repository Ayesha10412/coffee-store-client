import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import{
  createBrowserRouter,RouterProvider,
}from "react-router-dom";
import AddCoffee from './component/AddCoffee.jsx';
import UpdateCoffee from './component/UpdateCoffee.jsx';
import Home from './component/Home.jsx';
import Layout from './component/Layout.jsx';
import Signin from './component/Signin.jsx';
import SignUp from './component/SignUp.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Users from './component/Users.jsx';

const router = createBrowserRouter([

  {
    path:"/",
    element:<Layout></Layout>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('https://coffee-store-server-blond-beta.vercel.app/coffee')
      },
    {
      path:'addCoffee',
      element:<AddCoffee></AddCoffee>
    
    },
    {
      path:'updateCoffee/:id',
      element:<UpdateCoffee></UpdateCoffee>,
      loader:({params})=>fetch(`https://coffee-store-server-blond-beta.vercel.app/coffee/${params.id}`)
    },

{
  path:'signin',
  element:<Signin></Signin>,
},
{
  path:'signup',
  element:<SignUp></SignUp>
},
{
  path:'users',
  element:<Users></Users>,
  loader: ()=>fetch('https://coffee-store-server-blond-beta.vercel.app//users')
},

    ]
  },
  

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider  >
  <RouterProvider router={router} />
  </AuthProvider>
  </StrictMode>,
)
