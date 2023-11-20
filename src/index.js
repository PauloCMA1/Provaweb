import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import{createBrowserRouter, RouterProvider, Route} from "react-router-dom";
import Novidades from './routes/Novidades';
import ErrorPage from './routes/ErrorPage';
import Home from './routes/Home';
import {TelaLogin} from './telaLogin';
import { Cadastro } from './Registrar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path:"Novidades",
        element:<Novidades/>,
      },

    
    ]
    
  },
  {
    path:"Login",
    element:<TelaLogin/>
  },
  {
    path:"Registrar",
    element:<Cadastro/>
  },


])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


