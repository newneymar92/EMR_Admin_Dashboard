import AdminUserManagement from '@pages/adminUserManagement';
import Home from '@pages/home';
import Login from '@pages/login';
import React from 'react';
import PATH_URL from './pathURL';

const routes = [
  {
    path: PATH_URL.LOGIN,
    element: <Login />,
  },
  {
    path: PATH_URL.HOME,
    element: <Home />,
  },
  {
    path: PATH_URL.ADMIN_USER_MANAGEMENT,
    element: <AdminUserManagement />,
  },
];

export default routes;
