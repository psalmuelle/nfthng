import React from 'react';
import ReactDOM from 'react-dom/client';
import './Assets/Styles/index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import LandingPage from './Pages/Home';



const router = createBrowserRouter([
{
  path: "/",
  element: <LandingPage/>
}
])




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);

