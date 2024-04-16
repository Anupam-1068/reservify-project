import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom'; // Import createBrowserRouter and Outlet
import HomePage from '../pages/HomePage.jsx';
import App from "../App.jsx";
import BookPage from '../pages/BookPage/BookPage.jsx';
import DetailsPage from '../pages/DetailsPage/DetailsPage.jsx';
import FormPage from '../pages/FormPage/FormPage.jsx';
import Dashboard from '../pages/DashboardPage/DashboardPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/resevify',
        element: <HomePage />,  //<Outlet/> for http://localhost:5173/
      },
      
      {
        path: '/resevify/bookspace',
        element: <BookPage />,
      },

      {
        path: '/resevify/studySpace/:spaceId',
        element: <DetailsPage />,
      },
      {
        path: '/resevify/form/:spaceName',
        element: <FormPage />,
      },
      {
        path: '/resevify/dashboard',
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;