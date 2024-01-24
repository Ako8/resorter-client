import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Dashboard from './pages/Dashboard';
import Calendar from './components/Calendar';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },
  {
    path: "/dashboard/calendar",
    element: <Calendar/>,
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

