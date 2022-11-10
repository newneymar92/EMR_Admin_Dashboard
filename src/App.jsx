import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import routes from '@common/config/routers';
import LoadingView from '@components/LoadingView';
import LayoutView from '@components/layout';

function App() {
  const generateRoutes = () => {
    let result = null;
    result = routes.map((route) => {
      return (
        <Route
          key={route.id}
          path={route.path}
          element={
            route.isNoLayout ? (
              route.element
            ) : (
              <LayoutView isAuthenticate={route.isAuthenticate}>
                {route.element}
              </LayoutView>
            )
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
              <Route />
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
