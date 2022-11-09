import PATH_URL from '@common/config/pathURL';
import routes from '@common/config/routers';
import LayoutView from '@components/layout';
import LoadingView from '@components/LoadingView';
import Login from '@pages/login';
import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

function App() {
  const generateRoutes = () => {
    let result = null;
    result = routes.map((route, index) => {
      return (
        <Route
          key={index}
          path={route.path}
          element={
            <LayoutView isAuthenticate={route.isAuthenticate}>
              {route.element}
            </LayoutView>
          }
        />
      );
    });
    return result;
  };

  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Helmet>
      <div className="App">
        <Suspense fallback={<LoadingView />}>
          <Router>
            <Routes>
              <Route path={PATH_URL.LOGIN} element={<Login />} />
              {generateRoutes()}
              <Route path="/*" element={<Navigate to="/" replace />} />
            </Routes>
          </Router>
        </Suspense>
      </div>
    </>
  );
}

export default App;
