import React from 'react'
import ReactDOM from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { router } from './router/Router.jsx';
import AuthProvider from './firebase/authProvider/AuthProvider.jsx';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


<AuthProvider>
<ToastContainer />
<RouterProvider router={router}></RouterProvider>
</AuthProvider>


  </React.StrictMode>,
)
