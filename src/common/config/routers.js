import AdminUserManagement from '@pages/cameraManagement';
import Home from '@pages/home';
import Login from '@pages/login';
import React from 'react';
import PATH_URL from './pathURL';

const routes = [
  {
    id: 1,
    path: PATH_URL.LOGIN,
    element: <Login />,
    isNoLayout: true,
  },
  {
    id: 2,
    path: PATH_URL.HOME,
    element: <Home />,
    isNoLayout: false,
  },
  {
    id: 3,
    path: PATH_URL.CAMERA_MANAGEMENT,
    element: <AdminUserManagement />,
    isNoLayout: false,
  },
];

export default routes;
