import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PageWrapper from './components/commons/PageWrapper.jsx';
import Home from './pages/Home.jsx';
import CarDetail from './pages/CarDetails.jsx';
import Wishlist from './pages/Wishlist.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element:(
      <PageWrapper>
        <Home/>
      </PageWrapper>
    )
     
  },
  {
    path: '/car/:id',
    element: (
      <PageWrapper>
        <CarDetail/>
      </PageWrapper>
    )
  },
  {
    path: "/wishlist",
    element: (
      <PageWrapper>
        <Wishlist/>
      </PageWrapper>
    )
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
