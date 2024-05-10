import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { router } from './router/Router.jsx';
import AuthProvider from './firebase/authProvider/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


<AuthProvider>

<RouterProvider router={router}></RouterProvider>
</AuthProvider>


  </React.StrictMode>,
)
