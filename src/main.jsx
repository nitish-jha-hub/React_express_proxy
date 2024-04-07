import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import User from './user.jsx'
import Shop from './shop.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

const variable_router = createBrowserRouter([
  {
    path: "/",
    element: <><App/><h1>Home</h1></>,
  },
  {
    path: "/user",
    element: <><App/><User /></>,
  },
  {
    path: "/contact",
    element: <><App/><h1>Contact</h1></>,
  },
  {
    path: "/shop",
    element: <><App/><Shop/></>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* bootstrap CDN Style */}
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" integrity="sha384-..." crossOrigin="anonymous" />
    {/* <App/> */}
    <RouterProvider router={variable_router} />
    {/* bootstrap CDN script */}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-..." crossOrigin="anonymous"></script>
  </React.StrictMode>,
)
