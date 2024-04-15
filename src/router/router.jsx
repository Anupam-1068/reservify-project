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
        path: '/',
        element: <HomePage />,  //<Outlet/> for http://localhost:5173/
      },
      {
        path: '/home',
        element: <HomePage />,
      },

      {
        path: '/bookspace',
        element: <BookPage />,
      },

      {
        path: '/studySpace/:spaceId',
        element: <DetailsPage />,
      },
      {
        path: '/form',
        element: <FormPage />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;