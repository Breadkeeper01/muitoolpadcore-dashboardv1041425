import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';

import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloakComponent from './keycloak/keycloakComponent';



// import App from './App';
// import Layout from './layouts/dashboard';
// import DashboardPage from './pages';
// import EmployeesCrudPage from './pages/employees';
const App = React.lazy(() => import('./App'));
const Layout = React.lazy(() => import('./layouts/dashboard'));
const DashboardPage = React.lazy(() => import('./pages'));
const EmployeesCrudPage = React.lazy(() => import('./pages/employees'));


const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: '/',
        Component: Layout,
        children: [
          {
            path: '',
            Component: DashboardPage,
          },
          {
            path: 'employees/:employeeId?/*',
            Component: EmployeesCrudPage,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <ReactKeycloakProvider
      authClient={keycloakComponent}
      initOptions={{ onLoad: "login-required", checkLoginIframe: false }}
    >
      <React.StrictMode>
        {/* <React.Suspense fallback={<div>fallback...</div>}> */}
          <RouterProvider router={router} />
        {/* </React.Suspense> */}
      </React.StrictMode>
    </ReactKeycloakProvider>

);