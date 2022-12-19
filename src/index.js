import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: '/',
    element: <div>pls redirect to marino</div>
  },
  {
    path: '/marino',
    element: <div>pls redirect to today</div>
  },
  {
    path: '/marino/today',
    element: <div>marino today view</div>
  },
  {
    path: '/marino/historical',
    element: <div>marino hist view</div>
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);