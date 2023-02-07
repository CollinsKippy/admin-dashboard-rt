import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/error/index';
import DashboardPage from './pages/dashboard/index';
import TeamPage from './pages/team';
import ContactsPage from './pages/contacts';
import InvoicesPage from './pages/invoices';
import FormPage from './pages/form';
import BarPage from './pages/bar/index';
import LinePage from './pages/line/index';
import PiePage from './pages/pie/index';
import FaqPage from './pages/faq/index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'team', element: <TeamPage /> },
      { path: 'contacts', element: <ContactsPage /> },
      { path: 'invoices', element: <InvoicesPage /> },
      { path: 'form', element: <FormPage /> },
      { path: 'bar', element: <BarPage /> },
      { path: 'line', element: <LinePage /> },
      { path: 'pie', element: <PiePage /> },
      { path: 'faq', element: <FaqPage /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
