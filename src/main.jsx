import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter, RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Pages/Login/Login.jsx';
import About from './Components/Pages/About/About.jsx';
import ProductDetails from './Components/Pages/ProductDetails/ProductDetails.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Register from './Components/Pages/Register/Register.jsx';
import SocialLogin from './Components/Pages/SocialLogin/SocialLogin.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:
      [{
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/productsd',
        element: <ProductDetails></ProductDetails>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/social',
        element: <SocialLogin></SocialLogin>
      }]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
