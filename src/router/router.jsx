import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom'; // Import createBrowserRouter and Outlet
import HomePage from '../pages/HomePage.jsx';
import App from "../App.jsx";
import BookPage from '../pages/BookPage/BookPage.jsx';
import DetailsPage from '../pages/DetailsPage/DetailsPage.jsx';
import FormPage from '../pages/FormPage/FormPage.jsx';
import Dashboard from '../pages/DashboardPage/DashboardPage.jsx';
import ProfilePage from '../pages/ProfilePage/ProfilePage.jsx';
import ContactUsPage from '../pages/ContactUspage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/reservify',
        element: <HomePage />,  //<Outlet/> for http://localhost:5173/
      },
      
      {
        path: '/reservify/bookspace',
        element: <BookPage />,
      },

      {
        path: '/reservify/studySpace/:spaceId',
        element: <DetailsPage />,
      },
      {
        path: '/reservify/form/:spaceName',
        element: <FormPage />,
      },
      {
        path: '/reservify/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/reservify/profile',
        element: <ProfilePage />,
      },
      {
        path: '/reservify/contact',
        element: <ContactUsPage />,
      },
    ],
  },
]);

export default router;