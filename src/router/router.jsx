import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom'; // Import createBrowserRouter and Outlet
import HomePage from '../pages/HomePage.jsx';
import App from "../App.jsx";
import BookPage from '../pages/BookPage/BookPage.jsx';
import HistoryPage from '../pages/HistoryPage.jsx';
import DetailsPage from '../pages/DetailsPage/DetailsPage.jsx';
import FormPage from '../pages/FormPage/FormPage.jsx';

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
        path: '/history',
        element: <HistoryPage />,
      },
      {
        path: '/form',
        element: <FormPage />,
      },
    ],
  },
]);

export default router;